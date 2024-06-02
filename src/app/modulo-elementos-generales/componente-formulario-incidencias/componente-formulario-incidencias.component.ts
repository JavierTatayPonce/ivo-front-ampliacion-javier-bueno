import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesService } from 'src/app/services/servicio-imagenes/imagenes.service'; //IMPORTAMOS EL SERVICIO DE IMAGENES
@Component({
  selector: 'app-componente-formulario-incidencias',
  templateUrl: './componente-formulario-incidencias.component.html',
  styleUrls: ['./componente-formulario-incidencias.component.css']
})
export class ComponenteFormularioIncidenciasComponent implements OnInit {
  formData: any = {};
  @Input() rutaDestino: string = '';
  soltarImagen: boolean = false;

  constructor(private router: Router, public imagenesService: ImagenesService) {}

  ngOnInit() { //AÑADIMOS A LOS INPUTS NOMBRE Y PUESTO DE TRABAJO EL NOMBRE Y EL ROL DEL USUARIO LOGUEADO
    this.formData.nombre = localStorage.getItem('nombre') + ' ' + localStorage.getItem('primer_apellido');
    this.formData.puesto_trabajo = localStorage.getItem('rol');
  }

  onFileSelected(event: any) { //IMAGENES SELECCIONADAS
    const files = event.target.files;
    this.subirArchivos(files);
  }

  onDragOver(event: DragEvent) { //ARRASTRAR IMÁGENES
    event.preventDefault();
    this.soltarImagen = true;
  }

  onDrop(event: DragEvent) {//SOLTAR IMÁGENES
    event.preventDefault();
    this.soltarImagen = false;
    const files = event.dataTransfer?.files;
    if (files) {
      this.subirArchivos(files);
    }
  }

  subirArchivos(files: FileList) {//ALMACENA LAS IMÁGENES EN EL ARRAY
    for (let i = 0; i < files.length; i++) {
      this.imagenesService.imagenesSubidas.push(files[i]);
    }
  }

  eliminarFile(index: number) {//ELIMINA LAS IMÁGENES DE LA LISTA DE LAS IMÁGENES SUBIDAS[]
    this.imagenesService.imagenesSubidas.splice(index, 1);
  }

  onSubmit() {
    if (this.rutaDestino) {//ENVIAMOS LOS DATOS DEL FORMULARIO POR LA URL HACIA LA SIGUIENTE RUTA
        this.router.navigate([this.rutaDestino], { queryParams: this.formData });

    } else {
      console.error('No se ha proporcionado una ruta de destino.');
    }
  }
}
