import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidenciasService } from 'src/app/services/servicio-incidencias/incidencias.service'; //IMPORTAMOS EL INCIDENCIAS SERVICE
import { ImagenesService } from 'src/app/services/servicio-imagenes/imagenes.service'; //IMPORTAMOS EL IMAGENES SERVICE
@Component({
  selector: 'app-componente-editar-incidencia',
  templateUrl: './componente-editar-incidencia.component.html',
  styleUrls: ['./componente-editar-incidencia.component.css']
})
export class ComponenteEditarIncidenciaComponent implements OnInit{
  formData: any = {}; //FORMDATA DEL FORMULARIO
  @Input() proximaRuta: string = ''; //SIGUIENTE RUTA (SE AÑADE EN LA LLAMDA DEL COMPONENTE, CADA UNO TIENE SU RUTA)
  soltarImagen: boolean = false; //PARA PODER ARRASTRAR Y SOLTAR IMAGENES
  imagenesIncidencia: any[] = []; //LISTA TEMPORAL DE LAS IMAGENES AÑADIDAS
  isDisabled: boolean = false; //PARA DESHABILITAR EL BOTON DE EDICION

  constructor( //IMPORTAMOS TODO AL CONSTRUCTOR
    private route: ActivatedRoute,
    private router: Router,
    private incidenciasService: IncidenciasService,
    public imagenesService: ImagenesService
  ) {}

  onFileSelected(event: any) { //SUBIR LAS IMÁGENES SELECCIONADAS
    const files = event.target.files;
    this.subirArchivos(files);
  }

  onDragOver(event: DragEvent) { //ARRASTRAR IMÁGENES
    event.preventDefault();
    this.soltarImagen = true;
  }

  onDrop(event: DragEvent) { //SOLTAR IMÁGENES
    event.preventDefault();
    this.soltarImagen = false;
    const files = event.dataTransfer?.files;
    if (files) {
      this.subirArchivos(files);
    }
  }

  subirArchivos(files: FileList) { //ALMACENA LAS IMÁGENES EN EL ARRAY
    for (let i = 0; i < files.length; i++) {
      this.imagenesService.imagenesSubidas.push(files[i]);
    }
  }

  eliminarFile(index: number) { //ELIMINA LAS IMÁGENES DE LA LISTA DE LAS IMÁGENES SUBIDAS[]
    this.imagenesService.imagenesSubidas.splice(index, 1);
  }

  eliminarImagen(idImagen: number) { //ELIMINA LA IMÁGEN QUE YA TENIA VINCULADA LA INCIDENCIA (SE ELIMINA DIRECTAMENTE DE LA BD)
    this.imagenesService.eliminarImagen(idImagen).subscribe(response => {
      console.log('Imagen eliminada', response);
      // Filtra la lista de imágenes localmente para eliminar la imagen eliminada
      this.imagenesIncidencia = this.imagenesIncidencia.filter(imagen => imagen.id_imagen !== idImagen);
    }, error => {
      console.error('Error al eliminar la imagen', error);
    });
  }

  ngOnInit(): void { //NADA MÁS INICIAR SE GUARDAN SUS RESPECTIVOS PARAMETROS QUE TIENE LA INCIDENCIA EN SÍ EN LOS INPUTS,SELECTS Y TEXTAREA
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.incidenciasService.obtenerIncidenciaPorId(id).subscribe((incidencia: any) => {
          this.formData = {
            id: incidencia.id,
            asunto: incidencia.asunto,
            nivel_prioridad: incidencia.nivel_prioridad,
            nombre: incidencia.nombre,
            fecha: incidencia.fecha,
            puesto_trabajo: incidencia.puesto_trabajo,
            descripcion: incidencia.descripcion
          };

          //OBTENEMOS LAS IMAGENES POR LA ID DE LA INCIDENCIA
          this.imagenesService.obtenerImagenesPorIdIncidencia(id).subscribe((imagenes: any[]) => {
            this.imagenesIncidencia = imagenes;//LAS ALMACENAMOS
          });

          //COGEMOS EL NOMBRE Y EL ROL DEL LOCALSTORAGE UNA VEZ SE HAYA LOGUEADO
          const nombre = localStorage.getItem('nombre');
          const puestoTrabajo = localStorage.getItem('rol');

          //ASIGNAMOS ESOS VALORES DIRECTAMENTE AL FORMULARIO
          if (nombre) {
            this.formData.nombre = nombre;
          }
          if (puestoTrabajo) {
            this.formData.puesto_trabajo = puestoTrabajo;
          }

          //SI LA INCIDENCIA SE ENCUENTRA EN ESTADO 'RESUELTA' SE PODRÁ VER LA INFORMACION DE LA INCIDENCIA PERO NO SE PODRÁ ACTUALZIAR.
          if (incidencia.estado === 'RESUELTA') {
            this.isDisabled = true;
          }

        }, error => {
          console.error('Error al obtener la incidencia:', error);
        });
      }
    });
  }

  onSubmit() {
    //AL ENVIAR EL FORMULARIO ACTUALIZAMOS LA INCIDENCIA
    this.incidenciasService.editarIncidencia(this.formData).subscribe(response => {
  
      //ACTUALIZAMOS LAS IMAGENES
      if (this.imagenesService.imagenesSubidas.length > 0) {
        const formData = new FormData();
        this.imagenesService.imagenesSubidas.forEach((file, index) => { //ITERAMOS Y AÑADIMOS CADA IMAGEN AL ARRAY
          formData.append('imagenes[]', file, file.name);
        });
        formData.append('id_incidencia', this.formData.id); //AÑADIMOS EL ID DE LA INCIDENCIA QUE ESTAMOS MODIFICANDO
  
        this.imagenesService.actualizarImagenesIncidencia(this.formData.id, formData).subscribe(response => { //LLAMAMOS AL ENDPOINT DEL SERVICIO DE IMAGENES PARA ACTUALIZAR LAS IMAGENES DE LA INCIDENCIA
          console.log('Imágenes actualizadas', response);
          //LIMPIAMOS LA LISTA DE LAS IMAGENES AÑADIDAS
          this.imagenesService.clearUploadedFiles();
  
          //REDIRIGIMOS A OTRO COMPONENTE (CADA COMPONENTE TIENE SU RUTA)
          if (this.proximaRuta) {
            this.router.navigate([this.proximaRuta]);
          }
        }, error => {
          console.error('Error al actualizar las imágenes', error);
        });
      } else {
        //SI NO HAY NUEVAS IMAGENES SE REDIRIGE A LA RUTA DESEADA
        if (this.proximaRuta) {
          this.router.navigate([this.proximaRuta]);
        }
      }
    }, error => {
      console.error('Error al actualizar la incidencia', error);
    });
  }
  
}
