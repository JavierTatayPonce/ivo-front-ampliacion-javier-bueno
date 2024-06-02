import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTS LOGIN:
import { ComponenteLoginComponent } from './componente-login/componente-login.component';

// IMPORTS ADMINISTRATIVO:
import { ComponenteCitasAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-citas-administrativo/componente-citas-administrativo.component';
import { ComponenteCrearCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-administrativo.component';
import { ComponenteCrearPacienteAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-administrativo.component';
import { ComponenteModificarCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/componente-modificar-cita-administrativo.component';
import { ComponenteModificarCitaPasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/componente-modificar-cita-paso-dos/componente-modificar-cita-paso-dos.component';
import { ConfirmacionModificacionCitaComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/confirmacion-modificacion-cita/confirmacion-modificacion-cita.component';
import { ComponenteEliminarCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-eliminar-cita-administrativo/componente-eliminar-cita-administrativo.component';
import { ConfirmacionEliminacionCitaComponent } from './modulo-administrativo/componente-administrativo/componente-eliminar-cita-administrativo/confirmacion-eliminacion-cita/confirmacion-eliminacion-cita.component';
import { ComponenteCrearCitaPasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-paso-dos/componente-crear-cita-paso-dos.component';
import { ComponenteCrearCitaPasoTresComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-paso-tres/componente-crear-cita-paso-tres.component';
import { ComponenteCrearPacientePasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-paso-dos/componente-crear-paciente-paso-dos.component';
import { ComponenteCrearPacientePasoTresComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-paso-tres/componente-crear-paciente-paso-tres.component';
import { ConfirmacionCreacionPacienteComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/confirmacion-creacion-paciente/confirmacion-creacion-paciente.component';
import { ConfirmacionCreacionCitaComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/confirmacion-creacion-cita/confirmacion-creacion-cita.component';
import { ComponenteIncidenciasAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-incidencias-administrativo/componente-incidencias-administrativo.component';
import { ComponenteCrearInciAdminComponent } from './modulo-administrativo/componente-administrativo/componente-incidencias-administrativo/componente-crear-inci-admin/componente-crear-inci-admin.component';
import { ComponenteResumenInciAdminComponent } from './modulo-administrativo/componente-administrativo/componente-incidencias-administrativo/componente-resumen-inci-admin/componente-resumen-inci-admin.component';
import { ComponenteConfirmacionAdminComponent } from './modulo-administrativo/componente-administrativo/componente-incidencias-administrativo/componente-confirmacion-admin/componente-confirmacion-admin.component';
import { ComponenteEditarIncidenciaAdminComponent } from './modulo-administrativo/componente-administrativo/componente-incidencias-administrativo/componente-editar-incidencia-admin/componente-editar-incidencia-admin.component';
import { ComponenteConfirmacionEditarAdminComponent } from './modulo-administrativo/componente-administrativo/componente-incidencias-administrativo/componente-confirmacion-editar-admin/componente-confirmacion-editar-admin.component';
// IMPORTS RADIÓLOGO:
import { ComponenteRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-radiologo.component';
import { ComponenteBuscarCitaRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-buscar-cita-radiologo/componente-buscar-cita-radiologo.component';
import { ComponenteSubirPruebasComponent } from './modulo-radiologo/componente-radiologo/componente-cita-radiologo/componente-subir-pruebas/componente-subir-pruebas.component';
import { ComponenteConfirmacionInformeComponent } from './modulo-radiologo/componente-radiologo/componente-confirmacion-informe/componente-confirmacion-informe.component';
import { ComponenteIncidenciasRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-incidencias-radiologo/componente-incidencias-radiologo.component';
import { ComponenteCrearIncidenciaRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-incidencias-radiologo/componente-crear-incidencia-radiologo/componente-crear-incidencia-radiologo.component';
import { ComponenteResumenDatosIncidenciasRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-incidencias-radiologo/componente-resumen-datos-incidencias-radiologo/componente-resumen-datos-incidencias-radiologo.component';
import { ComponenteConfirmacionIncidenciaRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-incidencias-radiologo/componente-confirmacion-incidencia-radiologo/componente-confirmacion-incidencia-radiologo.component';
import { ComponenteEditarIncidenciaRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-incidencias-radiologo/componente-editar-incidencia-radiologo/componente-editar-incidencia-radiologo.component';
import { ComponenteConfirmacionEditarRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-incidencias-radiologo/componente-confirmacion-editar-radiologo/componente-confirmacion-editar-radiologo.component';
// IMPORTS MÉDICO:
import { ComponenteMedicoComponent } from './modulo-medico/componente-medico/componente-medico.component';
import { ComponenteInicioMedicoComponent } from './modulo-medico/componente-medico/componente-inicio-medico/componente-inicio-medico.component';
import { ComponenteCitaMedicoComponent } from './modulo-medico/componente-medico/componente-cita-medico/componente-cita-medico.component';
import { ComponenteIncidenciasMedicoComponent } from './modulo-medico/componente-medico/componente-incidencias-medico/componente-incidencias-medico.component';
import { ComponenteCrearIncidenciaMedicoComponent } from './modulo-medico/componente-medico/componente-incidencias-medico/componente-crear-incidencia-medico/componente-crear-incidencia-medico.component';
import { ComponenteResumenDatosIncidenciaMedicoComponent } from './modulo-medico/componente-medico/componente-incidencias-medico/componente-resumen-datos-incidencia-medico/componente-resumen-datos-incidencia-medico.component';
import { ComponenteConfirmacionIncidenciaComponent } from './modulo-medico/componente-medico/componente-incidencias-medico/componente-confirmacion-incidencia/componente-confirmacion-incidencia.component';
import { ComponenteEditarIncidenciaMedicoComponent } from './modulo-medico/componente-medico/componente-incidencias-medico/componente-editar-incidencia-medico/componente-editar-incidencia-medico.component';
import { ComponenteConfirmacionEditarMedicoComponent } from './modulo-medico/componente-medico/componente-incidencias-medico/componente-confirmacion-editar-medico/componente-confirmacion-editar-medico.component';
// IMPORTS PACIENTE:
import { ComponentePacienteComponent } from './modulo-paciente/componente-paciente/componente-paciente.component';
import { ComponentePedirCitaPacienteComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paciente.component';
import { ComponentePedirCitaPasoDosComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-dos/componente-pedir-cita-paso-dos.component';
import { ComponentePedirCitaPasoTresComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-tres/componente-pedir-cita-paso-tres.component';
import { ComponentePedirCitaPasoCuatroComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-cuatro/componente-pedir-cita-paso-cuatro.component';
import { ComponentePedirCitaPasoCincoComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-cinco/componente-pedir-cita-paso-cinco.component';

import { ComponenteMisCitasPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-mis-citas-paciente.component';
import { ComponenteCitaFacultativoPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cita-facultativo-paciente/componente-cita-facultativo-paciente.component';
import { ComponenteCitaEspecialistaPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cita-especialista-paciente/componente-cita-especialista-paciente.component';
import { ComponentePedirCitaPacienteFinalComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paciente-final/componente-pedir-cita-paciente-final.component';
import { ComponenteCancelarCitaPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cancelar-cita-paciente/componente-cancelar-cita-paciente.component';
import { ComponenteCancelarCitaPacienteFinalComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cancelar-cita-paciente-final/componente-cancelar-cita-paciente-final.component';
import { RolGuard } from './Guard/rol.guard';
import { LoginGuard } from './Guard/login.guard';


const routes: Routes = [
  // LOGIN
  { path: 'login', component: ComponenteLoginComponent },

  // ADMINISTRATIVO

  {
    path: 'administrativo',
    component: ComponenteCitasAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/citas',
    component: ComponenteCitasAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/misIncidencias',
    component: ComponenteIncidenciasAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/misIncidencias/crearIncidencia',
    component: ComponenteCrearInciAdminComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/misIncidencias/editarIncidencia/:id',
    component: ComponenteEditarIncidenciaAdminComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/misIncidencias/editarIncidencia/:id/confirmacionCambios',
    component: ComponenteConfirmacionEditarAdminComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/misIncidencias/crearIncidencia/resumenDatos',
    component: ComponenteResumenInciAdminComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/misIncidencias/crearIncidencia/resumenDatos/confirmacionIncidencia',
    component: ComponenteConfirmacionAdminComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearPaciente',
    component: ComponenteCrearPacienteAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearPaciente/crearPacientePaso2',
    component: ComponenteCrearPacientePasoDosComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearPaciente/crearPacientePaso3',
    component: ComponenteCrearPacientePasoTresComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearPaciente/confirmacionCreacionPaciente',
    component: ConfirmacionCreacionPacienteComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearCita',
    component: ComponenteCrearCitaAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearCita/crearCitaPaso2',
    component: ComponenteCrearCitaPasoDosComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearCita/crearCitaPaso3',
    component: ComponenteCrearCitaPasoTresComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/crearCita/confirmacionCreacionCita',
    component: ConfirmacionCreacionCitaComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/modificarCita',
    component: ComponenteModificarCitaAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/modificarCita/modificarCitaPaso2',
    component: ComponenteModificarCitaPasoDosComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/modificarCita/confirmacionModificarCita',
    component: ConfirmacionModificacionCitaComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/eliminarCita',
    component: ComponenteEliminarCitaAdministrativoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  {
    path: 'administrativo/eliminarCita/confirmacionEliminarCita',
    component: ConfirmacionEliminacionCitaComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 2,
    },
  },

  // RADIÓLOGO:
  {
    path: 'radiologo',
    component: ComponenteRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/buscarCita',
    component: ComponenteBuscarCitaRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/misIncidencias',
    component: ComponenteIncidenciasRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/misIncidencias/editarIncidencia/:id',
    component: ComponenteEditarIncidenciaRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/misIncidencias/editarIncidencia/:id/confirmacionCambios',
    component: ComponenteConfirmacionEditarRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/misIncidencias/crearIncidencia',
    component: ComponenteCrearIncidenciaRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/misIncidencias/crearIncidencia/resumenDatos',
    component: ComponenteResumenDatosIncidenciasRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/misIncidencias/crearIncidencia/resumenDatos/confirmacionIncidencia',
    component: ComponenteConfirmacionIncidenciaRadiologoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/buscarCita/citas',
    component: ComponenteSubirPruebasComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 1,
    },
  },

  {
    path: 'radiologo/buscarCita/citas/confirmacion',
    component: ComponenteConfirmacionInformeComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 1,
    },
  },

  // MÉDICO:
  {
    path: 'medico',
    component: ComponenteMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/inicio',
    component: ComponenteInicioMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/misIncidencias',
    component: ComponenteIncidenciasMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/misIncidencias/editarIncidencia/:id',
    component: ComponenteEditarIncidenciaMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/misIncidencias/editarIncidencia/:id/confirmacionCambios',
    component: ComponenteConfirmacionEditarMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },


  {
    path: 'medico/misIncidencias/crearIncidencia',
    component: ComponenteCrearIncidenciaMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/misIncidencias/crearIncidencia/resumenDatos',
    component: ComponenteResumenDatosIncidenciaMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/misIncidencias/crearIncidencia/resumenDatos/confirmacionIncidencia',
    component: ComponenteConfirmacionIncidenciaComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  {
    path: 'medico/citas/:dni/:fecha/:hora/:nombrePaciente/:id_paciente',
    component: ComponenteCitaMedicoComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 3,
    },
  },

  // PACIENTE:
  {
    path: 'paciente',
    component: ComponentePacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita',
    component: ComponentePedirCitaPacienteComponent,
    canActivate: [LoginGuard, RolGuard],

    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/pedirCitaPaso2',
    component: ComponentePedirCitaPasoDosComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/pedirCitaPaso3',
    component: ComponentePedirCitaPasoTresComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/pedirCitaPaso4',
    component: ComponentePedirCitaPasoCuatroComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/pedirCitaPaso5',
    component: ComponentePedirCitaPasoCincoComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/pedirCita/confirmacion',
    component: ComponentePedirCitaPacienteFinalComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas',
    component: ComponenteMisCitasPacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas/cancelarCita',
    component: ComponenteCancelarCitaPacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas/cancelarCitaConfirmacion',
    component: ComponenteCancelarCitaPacienteFinalComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas/citaEspecialista',
    component: ComponenteCitaEspecialistaPacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  {
    path: 'paciente/misCitas/citaFacultativo',
    component: ComponenteCitaFacultativoPacienteComponent,
    canActivate: [LoginGuard, RolGuard],
    data: {
      idRol: 4,
    },
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}