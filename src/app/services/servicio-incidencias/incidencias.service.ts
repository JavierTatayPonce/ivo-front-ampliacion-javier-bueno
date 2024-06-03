import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../servicio-auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  private apiUrl = 'https://intraivo.online/public/api/incidencias';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token_usuario');  // Obtener el token del localStorage
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Usar el token en el encabezado de autorización
    });
  }

  obtenerIncidenciasEmpleado(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/mostrarIncidenciasEmpleado/${id}`, { headers: this.getHeaders() });
  }

  crearIncidencia(incidencia: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardar`, incidencia, { headers: this.getHeaders() });
  }

  editarIncidencia(incidencia: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/actualizar/${incidencia.id}`, incidencia, { headers: this.getHeaders() });
  }

  obtenerIncidenciaPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/buscar/${id}`, { headers: this.getHeaders() });
  }

  eliminarIncidencia(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/borrar/${id}`, { headers: this.getHeaders() });
  }
}
