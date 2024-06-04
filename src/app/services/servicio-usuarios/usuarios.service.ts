import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  // ENDPOINTS DEL ADMINISTRATIVO:

  buscarPorDni(): Observable<any> {
    return this.http.get(
     'https://intraivo.online/api/usuarios/buscarPorDni'
     //'https://ivo-back.online/api/usuarios/buscarPorDni'
    );
  }

  mostrarRadiologos(): Observable<any> {
    return this.http.get(
      'https://intraivo.online/api/usuarios/mostrarRadiologos'
      //'https://ivo-back.online/api/usuarios/mostrarRadiologos'
    );
  }

  crearUsuarioPaciente(datos: any): Observable<any> {
    // Ajusta la URL según tu configuración
    return this.http.post(
      'https://intraivo.online/api/usuarios/crearUsuarioPaciente',
      datos

       //'https://ivo-back.online/api/usuarios/crearUsuarioPaciente', datos
    );
  }
}

