import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { CancelarTurnoComponent } from './cancelar-turno/cancelar-turno.component';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { CalificarTurnoComponent } from './calificar-turno/calificar-turno.component';
import { ResenaTurnoComponent } from './resena-turno/resena-turno.component';
import { EncuestaTurnoComponent } from './encuesta-turno/encuesta-turno.component';
import { HistoriaClinicaEspComponent } from './historia-clinica-esp/historia-clinica-esp.component';

@NgModule({
  declarations: [
    //MisTurnosComponent,
    //SolicitarTurnoComponent,
    //CancelarTurnoComponent,
    //PerfilPacienteComponent,
    //HistoriaClinicaComponent,
    //CalificarTurnoComponent,
    //ResenaTurnoComponent,
    //EncuestaTurnoComponent,
    //HistoriaClinicaEspComponent
  ],
  exports: [
    MisTurnosComponent,
    SolicitarTurnoComponent,
    CancelarTurnoComponent,
    PerfilPacienteComponent,
    HistoriaClinicaComponent,
    CalificarTurnoComponent,
    ResenaTurnoComponent,
    EncuestaTurnoComponent,
    HistoriaClinicaEspComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MisTurnosComponent,
    SolicitarTurnoComponent,
    CancelarTurnoComponent,
    PerfilPacienteComponent,
    HistoriaClinicaComponent,
    CalificarTurnoComponent,
    ResenaTurnoComponent,
    EncuestaTurnoComponent,
    HistoriaClinicaEspComponent
  ]
})

export class PacienteModule { }