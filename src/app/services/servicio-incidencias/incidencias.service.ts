import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(private http: HttpClient) { }

  obtenerIncidenciasEmpleado(id: number): Observable<any> {
    return this.http.get(`https://intraivo.online/api/incidencias/mostrarIncidenciasEmpleado/${id}`);
  }

  crearIncidencia(incidencia: any): Observable<any> {
    return this.http.post('https://intraivo.online/api/incidencias/guardar', incidencia);
  }

  editarIncidencia(incidencia: any): Observable<any>{
    return this.http.put(`https://intraivo.online/api/incidencias/actualizar/${incidencia.id}`, incidencia);
    
  }

  obtenerIncidenciaPorId(id: number): Observable<any> {
    return this.http.get(`https://intraivo.online/api/incidencias/buscar/${id}`);
  }

  eliminarIncidencia(id: number): Observable<any>{
    return this.http.delete(`https://intraivo.online/api/incidencias/borrar/${id}`);
  }

}
