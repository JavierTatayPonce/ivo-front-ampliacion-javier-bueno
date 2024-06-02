// IMPORTACIONES GENERALES:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DataTablesModule } from 'angular-datatables';

// IMPORTACIONES MÉDICO:
import { ComponenteMedicoComponent } from './componente-medico/componente-medico.component';
import { ComponenteInicioMedicoComponent } from './componente-medico/componente-inicio-medico/componente-inicio-medico.component';
import { ComponenteCitaMedicoComponent } from './componente-medico/componente-cita-medico/componente-cita-medico.component';
import { ComponenteCajaDiagnosticoComponent } from './componente-medico/componente-cita-medico/componente-caja-diagnostico/componente-caja-diagnostico.component';
import { ComponenteHistorialPacienteComponent } from './componente-medico/componente-cita-medico/componente-historial-paciente/componente-historial-paciente.component';
import { ComponenteCajaInformacionPacienteComponent } from './componente-medico/componente-cita-medico/componente-caja-informacion-paciente/componente-caja-informacion-paciente.component';
import { ComponentePopupConfirmarSalirComponent } from './componente-medico/componente-cita-medico/componente-popup-confirmar-salir/componente-popup-confirmar-salir.component';
import { ComponenteCabeceraInicioMedicoComponent } from './componente-medico/componente-inicio-medico/componente-cabecera-inicio-medico/componente-cabecera-inicio-medico.component';
import { ComponenteHorarioSidebarMedicoComponent } from './componente-medico/componente-inicio-medico/componente-horario-sidebar-medico/componente-horario-sidebar-medico.component';
import { ComponenteTablaPacientesMedicoComponent } from './componente-medico/componente-inicio-medico/componente-tabla-pacientes-medico/componente-tabla-pacientes-medico.component';
import { StylingService } from './componente-medico/services/styling.service';
import { SharedService } from './componente-medico/services/shared.service';
import { FormsModule } from '@angular/forms'; 
import { ComponentePopupConfirmarCancelarComponent } from './componente-medico/componente-inicio-medico/componente-popup-confirmar-cancelar/componente-popup-confirmar-cancelar.component';
import { ComponenteIncidenciasMedicoComponent } from './componente-medico/componente-incidencias-medico/componente-incidencias-medico.component';
import { ComponenteTablaIncidenciasComponent } from './componente-medico/componente-incidencias-medico/componente-tabla-incidencias/componente-tabla-incidencias.component';
import { ComponenteCrearIncidenciaMedicoComponent } from './componente-medico/componente-incidencias-medico/componente-crear-incidencia-medico/componente-crear-incidencia-medico.component';
import { ComponenteResumenDatosIncidenciaMedicoComponent } from './componente-medico/componente-incidencias-medico/componente-resumen-datos-incidencia-medico/componente-resumen-datos-incidencia-medico.component';
import { ComponenteConfirmacionIncidenciaComponent } from './componente-medico/componente-incidencias-medico/componente-confirmacion-incidencia/componente-confirmacion-incidencia.component';
// IMPORTACIÓN MÓDULO ELEMENTOS GENERALES:
import {ModuloElementosGeneralesModule} from '../modulo-elementos-generales/modulo-elementos-generales.module';
import { ComponenteEditarIncidenciaMedicoComponent } from './componente-medico/componente-incidencias-medico/componente-editar-incidencia-medico/componente-editar-incidencia-medico.component';
import { ComponenteConfirmacionEditarMedicoComponent } from './componente-medico/componente-incidencias-medico/componente-confirmacion-editar-medico/componente-confirmacion-editar-medico.component';





@NgModule({
  declarations: [
    ComponenteMedicoComponent,
    ComponenteInicioMedicoComponent,
    ComponenteCitaMedicoComponent,
    ComponenteCajaDiagnosticoComponent,
    ComponenteHistorialPacienteComponent,
    ComponenteCajaInformacionPacienteComponent,
    ComponentePopupConfirmarSalirComponent,
    ComponenteCabeceraInicioMedicoComponent,
    ComponenteTablaPacientesMedicoComponent,
    ComponentePopupConfirmarCancelarComponent,
    ComponenteIncidenciasMedicoComponent,
    ComponenteTablaIncidenciasComponent,
    ComponenteCrearIncidenciaMedicoComponent,
    ComponenteResumenDatosIncidenciaMedicoComponent,
    ComponenteConfirmacionIncidenciaComponent,
    ComponenteEditarIncidenciaMedicoComponent,
    ComponenteConfirmacionEditarMedicoComponent,
  ],
  imports: [
    CommonModule,
    ModuloElementosGeneralesModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ComponenteHorarioSidebarMedicoComponent,
    DataTablesModule,
    FormsModule
    ],
    providers: [StylingService, SharedService]
})
export class ModuloMedicoModule { }
