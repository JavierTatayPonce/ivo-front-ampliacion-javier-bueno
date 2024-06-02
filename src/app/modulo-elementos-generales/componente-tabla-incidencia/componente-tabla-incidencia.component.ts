import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IncidenciasService } from 'src/app/services/servicio-incidencias/incidencias.service';
import { AuthService } from 'src/app/services/servicio-auth/auth.service';
declare var $: any;

@Component({
  selector: 'app-componente-tabla-incidencia',
  templateUrl: './componente-tabla-incidencia.component.html',
  styleUrls: ['./componente-tabla-incidencia.component.css']
})
export class ComponenteTablaIncidenciaComponent implements OnInit {
  dataTable: any;
  incidenciasData: any[] = [];
  @Input() proximaRuta: string = '';
  incidenciaAEliminar: any = null;

  constructor(
    private incidenciasService: IncidenciasService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.obtenerUsuarioId().subscribe(userId => {
      if (userId) {
        //Llamar al servicio de incidencias para obtener las incidencias del usuario
        this.incidenciasService.obtenerIncidenciasEmpleado(userId).subscribe((incidencias: any[]) => {
          this.incidenciasData = incidencias;
          this.inicializarDataTable();
        });
      }
    });
  }

  inicializarDataTable(): void { //INICIALIZAMOS EL DATATABLE CON SUS CAMPOS Y VALORES
    this.dataTable = $('#dataTable').DataTable({
      dom: 'frtip',//para quitar el show entries por defecto del datatable
      columns: [
        { title: 'Asunto', data: 'asunto' },
        { title: 'Nivel de prioridad', data: 'nivel_prioridad' },
        { title: 'Estado', data: 'estado' },
        { title: 'Fecha', data: 'fecha' },
        { title: 'Acciones', data: null, render: (data: any, type: any, row: any) => {
          return `
            <a href="javascript:void(0);" class="edit-incidencia" data-id="${row.id}">
              <img src="assets/images/ImagenesGenerales/editarIncidencia.svg" alt="Editar">
            </a>
            <a href="javascript:void(0);" class="delete-incidencia" data-id="${row.id}">
              <img src="assets/images/ImagenesGenerales/papelera.svg" alt="Eliminar">
            </a>`;//DOS ICONOS, UNO PARA ELIMINAR LA INCIDENCIA Y OTRO PARA EDITARLA (COGIENDO LA ID RESPECTIVA DE LA INCIDENCIA), CADA UNO TIENE SU PROPIA RUTA
        }}
      ],
      data: this.incidenciasData
    });

    $('#dataTable tbody').on('click', 'a.edit-incidencia', (event: any) => {
      const id = $(event.currentTarget).data('id');
      const incidencia = this.incidenciasData.find(inc => inc.id === id);
      if (incidencia) {
        this.router.navigate([this.proximaRuta, id], { state: { estado: incidencia.estado } });
      }
    });
    

    $('#dataTable tbody').on('click', 'a.delete-incidencia', (event: any) => {
      const id = $(event.currentTarget).data('id');
      const incidencia = this.incidenciasData.find(inc => inc.id === id);
      if (incidencia && incidencia.estado === 'PENDIENTE') {
        this.incidenciaAEliminar = incidencia; // Guardar la incidencia a eliminar
        $('#confirmDeleteModal').modal('show'); // Mostrar el modal de confirmación de eliminación
      } else {
        $('#errorModal').modal('show'); // Mostrar el modal de error
      }
    });
  }

  confirmarEliminacion(): void {
    if (this.incidenciaAEliminar !== null) {
      this.incidenciasService.eliminarIncidencia(this.incidenciaAEliminar.id).subscribe(
        response => {
          // Recargar la tabla después de eliminar la incidencia
          this.incidenciasData = this.incidenciasData.filter(incidencia => incidencia.id !== this.incidenciaAEliminar.id);
          this.dataTable.clear().rows.add(this.incidenciasData).draw();
          $('#confirmDeleteModal').modal('hide'); // Ocultar el modal
        },
        error => {
          console.error('Error al eliminar la incidencia:', error);
          alert('Error al eliminar la incidencia.');
        }
      );
    }
  }

  cerrarModal(): void {
    $('#confirmDeleteModal').modal('hide'); // Ocultar el modal
    $('#errorModal').modal('hide');
  }

  ngOnDestroy(): void {
    if (this.dataTable) {
      $('#dataTable tbody').off('click', 'a.edit-incidencia');
      $('#dataTable tbody').off('click', 'a.delete-incidencia');
      this.dataTable.destroy();
    }
  }
}
