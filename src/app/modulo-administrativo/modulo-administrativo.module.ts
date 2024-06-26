// IMPORTACIONES GENERALES:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// IMPORTACIONES ADMINISTRATIVO:
import { ComponenteAdministrativoComponent } from './componente-administrativo/componente-administrativo.component';
import { ComponenteCitasAdministrativoComponent } from './componente-administrativo/componente-citas-administrativo/componente-citas-administrativo.component';
import { ComponenteCrearPacienteAdministrativoComponent } from './componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-administrativo.component';
import { ComponenteCrearCitaAdministrativoComponent } from './componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-administrativo.component';
import { ComponenteModificarCitaAdministrativoComponent } from './componente-administrativo/componente-modificar-cita-administrativo/componente-modificar-cita-administrativo.component';
import { ComponenteEliminarCitaAdministrativoComponent } from './componente-administrativo/componente-eliminar-cita-administrativo/componente-eliminar-cita-administrativo.component';
import { ComponenteCrearCitaPasoDosComponent } from './componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-paso-dos/componente-crear-cita-paso-dos.component';
import { ComponenteCrearCitaPasoTresComponent } from './componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-paso-tres/componente-crear-cita-paso-tres.component';
import { ComponenteCrearPacientePasoDosComponent } from './componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-paso-dos/componente-crear-paciente-paso-dos.component';
import { ComponenteCrearPacientePasoTresComponent } from './componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-paso-tres/componente-crear-paciente-paso-tres.component';
import { ComponenteModificarCitaPasoDosComponent } from './componente-administrativo/componente-modificar-cita-administrativo/componente-modificar-cita-paso-dos/componente-modificar-cita-paso-dos.component';
import { ConfirmacionModificacionCitaComponent } from './componente-administrativo/componente-modificar-cita-administrativo/confirmacion-modificacion-cita/confirmacion-modificacion-cita.component';
import { ConfirmacionEliminacionCitaComponent } from './componente-administrativo/componente-eliminar-cita-administrativo/confirmacion-eliminacion-cita/confirmacion-eliminacion-cita.component';
import { ConfirmacionCreacionCitaComponent } from './componente-administrativo/componente-crear-cita-administrativo/confirmacion-creacion-cita/confirmacion-creacion-cita.component';
import { ConfirmacionCreacionPacienteComponent } from './componente-administrativo/componente-crear-paciente-administrativo/confirmacion-creacion-paciente/confirmacion-creacion-paciente.component';

// IMPORTACIÓN MÓDULO ELEMENTOS GENERALES:
import { ModuloElementosGeneralesModule } from '../modulo-elementos-generales/modulo-elementos-generales.module';
import { ComponenteIncidenciasAdministrativoComponent } from './componente-administrativo/componente-incidencias-administrativo/componente-incidencias-administrativo.component';
import { ComponenteTablaIncidenciasComponent } from './componente-administrativo/componente-incidencias-administrativo/componente-tabla-incidencias/componente-tabla-incidencias.component';
import { ComponenteCrearInciAdminComponent } from './componente-administrativo/componente-incidencias-administrativo/componente-crear-inci-admin/componente-crear-inci-admin.component';
import { ComponenteResumenInciAdminComponent } from './componente-administrativo/componente-incidencias-administrativo/componente-resumen-inci-admin/componente-resumen-inci-admin.component';
import { ComponenteConfirmacionAdminComponent } from './componente-administrativo/componente-incidencias-administrativo/componente-confirmacion-admin/componente-confirmacion-admin.component';
import { ComponenteEditarIncidenciaAdminComponent } from './componente-administrativo/componente-incidencias-administrativo/componente-editar-incidencia-admin/componente-editar-incidencia-admin.component';
import { ComponenteConfirmacionEditarAdminComponent } from './componente-administrativo/componente-incidencias-administrativo/componente-confirmacion-editar-admin/componente-confirmacion-editar-admin.component';
@NgModule({
  declarations: [
    ComponenteAdministrativoComponent,
    ComponenteCitasAdministrativoComponent,
    ComponenteCrearPacienteAdministrativoComponent,
    ComponenteCrearCitaAdministrativoComponent,
    ComponenteModificarCitaAdministrativoComponent,
    ComponenteEliminarCitaAdministrativoComponent,
    ComponenteCrearCitaPasoDosComponent,
    ComponenteCrearCitaPasoTresComponent,
    ComponenteCrearPacientePasoDosComponent,
    ComponenteCrearPacientePasoTresComponent,
    ComponenteModificarCitaPasoDosComponent,
    ConfirmacionModificacionCitaComponent,
    ConfirmacionEliminacionCitaComponent,
    ConfirmacionCreacionCitaComponent,
    ConfirmacionCreacionPacienteComponent,
    ComponenteIncidenciasAdministrativoComponent,
    ComponenteTablaIncidenciasComponent,
    ComponenteCrearInciAdminComponent,
    ComponenteResumenInciAdminComponent,
    ComponenteConfirmacionAdminComponent,
    ComponenteEditarIncidenciaAdminComponent,
    ComponenteConfirmacionEditarAdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ModuloElementosGeneralesModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ModuloAdministrativoModule {}
