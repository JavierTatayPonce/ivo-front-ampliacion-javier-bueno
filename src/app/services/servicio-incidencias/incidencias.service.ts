import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(private http: HttpClient) { }

  obtenerIncidenciasEmpleado(id: number): Observable<any> {
    return this.http.get(`http://localhost/ivo_backend/public/api/incidencias/mostrarIncidenciasEmpleado/${id}`);
  }

  crearIncidencia(incidencia: any): Observable<any> {
    return this.http.post('http://localhost/ivo_backend/public/api/incidencias/guardar', incidencia);
  }

  editarIncidencia(incidencia: any): Observable<any>{
    return this.http.put(`http://localhost/ivo_backend/public/api/incidencias/actualizar/${incidencia.id}`, incidencia);
    
  }

  obtenerIncidenciaPorId(id: number): Observable<any> {
    return this.http.get(`http://localhost/ivo_backend/public/api/incidencias/buscar/${id}`);
  }

  eliminarIncidencia(id: number): Observable<any>{
    return this.http.delete(`http://localhost/ivo_backend/public/api/incidencias/borrar/${id}`);
  }

}
