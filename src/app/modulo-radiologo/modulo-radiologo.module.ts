// IMPORTACIONES GENERALES:
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
// IMPORTACIONES RADIÓLOGO:
import { ComponenteRadiologoComponent } from './componente-radiologo/componente-radiologo.component';
import { ComponenteBuscarCitaRadiologoComponent } from './componente-radiologo/componente-buscar-cita-radiologo/componente-buscar-cita-radiologo.component';
import { ComponenteCajaBlancaMedianaComponent } from './componente-radiologo/componente-buscar-cita-radiologo/componente-caja-blanca-mediana/componente-caja-blanca-mediana.component';
import { ComponenteCitaRadiologoComponent } from './componente-radiologo/componente-cita-radiologo/componente-cita-radiologo.component';
import { ComponenteSubirPruebasComponent } from './componente-radiologo/componente-cita-radiologo/componente-subir-pruebas/componente-subir-pruebas.component';
import { ComponenteInformePruebasComponent } from './componente-radiologo/componente-cita-radiologo/componente-informe-pruebas/componente-informe-pruebas.component';
import { ComponenteCajaInformacionPacienteComponent } from './componente-radiologo/componente-cita-radiologo/componente-caja-informacion-paciente/componente-caja-informacion-paciente.component';
import { ComponenteConfirmacionInformeComponent } from './componente-radiologo/componente-confirmacion-informe/componente-confirmacion-informe.component';
import { ComponenteIncidenciasRadiologoComponent } from './componente-radiologo/componente-incidencias-radiologo/componente-incidencias-radiologo.component';
import { ComponenteTablaIncidenciasComponent } from './componente-radiologo/componente-incidencias-radiologo/componente-tabla-incidencias/componente-tabla-incidencias.component';
import { ComponenteCrearIncidenciaRadiologoComponent } from './componente-radiologo/componente-incidencias-radiologo/componente-crear-incidencia-radiologo/componente-crear-incidencia-radiologo.component';
import { ComponenteResumenDatosIncidenciasRadiologoComponent } from './componente-radiologo/componente-incidencias-radiologo/componente-resumen-datos-incidencias-radiologo/componente-resumen-datos-incidencias-radiologo.component';
import { ComponenteConfirmacionIncidenciaRadiologoComponent } from './componente-radiologo/componente-incidencias-radiologo/componente-confirmacion-incidencia-radiologo/componente-confirmacion-incidencia-radiologo.component';

// IMPORTACIÓN MÓDULO ELEMENTOS GENERALES:
import { ModuloElementosGeneralesModule } from '../modulo-elementos-generales/modulo-elementos-generales.module';
import { ComponenteEditarIncidenciaRadiologoComponent } from './componente-radiologo/componente-incidencias-radiologo/componente-editar-incidencia-radiologo/componente-editar-incidencia-radiologo.component';
import { ComponenteConfirmacionEditarRadiologoComponent } from './componente-radiologo/componente-incidencias-radiologo/componente-confirmacion-editar-radiologo/componente-confirmacion-editar-radiologo.component';



@NgModule({
  declarations: [
    ComponenteRadiologoComponent,
    ComponenteBuscarCitaRadiologoComponent,
    ComponenteCitaRadiologoComponent,
    ComponenteCajaBlancaMedianaComponent,
    ComponenteSubirPruebasComponent,
    ComponenteInformePruebasComponent,
    ComponenteCajaInformacionPacienteComponent,
    ComponenteConfirmacionInformeComponent,
    ComponenteIncidenciasRadiologoComponent,
    ComponenteTablaIncidenciasComponent,
    ComponenteCrearIncidenciaRadiologoComponent,
    ComponenteResumenDatosIncidenciasRadiologoComponent,
    ComponenteConfirmacionIncidenciaRadiologoComponent,
    ComponenteEditarIncidenciaRadiologoComponent,
    ComponenteConfirmacionEditarRadiologoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModuloElementosGeneralesModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],

  exports: [],
})
export class ModuloRadiologoModule {}
