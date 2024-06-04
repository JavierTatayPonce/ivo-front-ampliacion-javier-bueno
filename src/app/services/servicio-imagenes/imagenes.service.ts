import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  constructor(private http: HttpClient) {}

  mostrarImagenesDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
      `https://intraivo.online/api/imagenes/mostrarImagenesDelPaciente/${idCita}`
      //`https://intraivo.online/api/imagenes/mostrarImagenesDelPaciente/${idCita}`
    );
  }
  //  `https://ivo-back.online/api/imagenes/mostrarImagenesDelPaciente/${idCita}`

  guardar(datos: any): Observable<any> {
    // Guardar imágenes radiológicas
    /*return this.http.post(
      'https://ivo-back.online/api/imagenes/guardar',
      datos
    );*/
     return this.http.post('https://intraivo.online/api/imagenes/guardar',datos);
  }

  imagenesSubidas: File[] = [];

  clearUploadedFiles() {
    this.imagenesSubidas = [];
  }

  guardarImagenesIncidencia(formData: FormData): Observable<any> {
    return this.http.post('https://intraivo.online/api/incidencias/guardarImagenesIncidencia', formData);
  }

  actualizarImagenesIncidencia(idIncidencia: number, formData: FormData): Observable<any> {
    return this.http.post(`https://intraivo.online/api/incidencias/actualizarImagenesIncidencia/${idIncidencia}`, formData);
  }

  obtenerImagenesPorIdIncidencia(id: number): Observable<any> {
    return this.http.get(`https://intraivo.online/api/incidencias/obtenerImagenesPorIdIncidencia/${id}`);
  }

  eliminarImagen(id:number): Observable<any>{
    return this.http.delete(`https://intraivo.online/api/imagenes/borrar/${id}`);
  }

}
