import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IncidenciasService } from 'src/app/services/servicio-incidencias/incidencias.service'; //IMPORTAMOS EL SERVICIO DE INCIDENCIAS
import { AuthService } from 'src/app/services/servicio-auth/auth.service'; //IMPORTAMOS EL SERVICIO DE AUTH
import { ImagenesService } from 'src/app/services/servicio-imagenes/imagenes.service'; //IMPORTAMOS EL SERVICIO DE IMAGENES
@Component({
  selector: 'app-componente-resumen-datos-incidencias',
  templateUrl: './componente-resumen-datos-incidencias.component.html',
  styleUrls: ['./componente-resumen-datos-incidencias.component.css']
})
export class ComponenteResumenDatosIncidenciasComponent implements OnInit{

  incidencia: any = {};
  imagenesSubidas: File[] = []; //ARRAY DE IMAGENES SUBIDAS
  @Input() siguienteRuta='';
  constructor(private route: ActivatedRoute, private router: Router, private incidenciasService: IncidenciasService, private authService: AuthService, private imagenesService: ImagenesService) { }

  ngOnInit(): void { //COGEMOS LOS PARAMETROS DE LA URL CUANDO SE INICIE
    this.route.queryParams.subscribe(params => {
      this.incidencia = params;
    });
    this.imagenesSubidas= this.imagenesService.imagenesSubidas;
  }

 redireccion() { 
    this.authService.obtenerUsuarioId().subscribe(id => {
      if (id) {
        const incidencia = {
          asunto: this.incidencia.asunto,
          descripcion: this.incidencia.descripcion,
          nivel_prioridad: this.incidencia.nivel_prioridad,
          fecha: this.incidencia.fecha,
          id_administrativo: localStorage.getItem('rol') === '2' ? id : null,
          id_medico: localStorage.getItem('rol') === '3' ? id : null,
          id_radiologo: localStorage.getItem('rol') === '1' ? id : null,
          estado: 'PENDIENTE' //CADA VEZ QUE SE CREA UNA INCIDENCIA NUEVA EL ESTADO SERÁ 'PENDIENTE'
        };

        this.incidenciasService.crearIncidencia(incidencia).subscribe(
          response => {
            const idIncidencia = response.id; //OBTENEMOS EL ID DE LA INCIDENCIA CREADA
            this.guardarImagenesIncidencia(idIncidencia); //FUNCION GUARDAR IMAGENES DEL SERVICIO DE IMAGENES (ENDPOINT)

            if (this.siguienteRuta) {
              this.router.navigate([this.siguienteRuta]);
            }
            this.imagenesService.imagenesSubidas = [];
          },
          error => {
            console.error('Error al crear la incidencia', error);
          }
        );
      } else {
        console.error('No se pudo obtener el ID del usuario.');
      }
    });
  }

  guardarImagenesIncidencia(idIncidencia: number) {
    const formData = new FormData();
    this.imagenesSubidas.forEach((file, index) => {
      formData.append(`imagenes[${index}]`, file, file.name); //AGREGAMOS CADA IMAGEN AL FORMDATA
    });
    formData.append('id_incidencia', idIncidencia.toString()); //AGREGAMOS EL ID TAMBIEN AL FORMDATA
  
    this.imagenesService.guardarImagenesIncidencia(formData).subscribe(
      response => {
        console.log('Imágenes guardadas exitosamente', response);
      },
      error => {
        console.error('Error al guardar las imágenes', error);
      }
    );
  }

  getNombrePuesto(): string { //PARA SABER QUE ROL ES CADA ID_ROL
    const rol = localStorage.getItem('rol');
    switch (rol) {
      case '1':
        return 'Radiologo';
      case '2':
        return 'Medico';
      case '3':
        return 'Administrativo';
      default:
        return 'Desconocido';
    }
  }
}
