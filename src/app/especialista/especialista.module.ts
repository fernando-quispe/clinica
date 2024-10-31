import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistaRoutingModule } from './especialista-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearTurnosComponent } from './crear-turnos/crear-turnos.component';
import { RechazarTurnosComponent } from './rechazar-turnos/rechazar-turnos.component';
import { FinalizarTurnoComponent } from './finalizar-turno/finalizar-turno.component';
import { ResEspecialistaComponent } from './res-especialista/res-especialista.component';
import { PerfilEspecialistaComponent } from './perfil-especialista/perfil-especialista.component';
import { MisTurnosEspecialistaComponent } from './mis-turnos-especialista/mis-turnos-especialista.component';
import { MisPacientesComponent } from './mis-pacientes/mis-pacientes.component';
import { CancelarTurnoEspecialistaComponent } from './cancelar-turno-especialista/cancelar-turno-especialista.component';
import { FinalizarTurnoEspecialistaComponent } from './finalizar-turno-especialista/finalizar-turno-especialista.component';
import { HistoriaClinicaTurnoEspecialistaComponent } from './historia-clinica-turno-especialista/historia-clinica-turno-especialista.component';
import { DetalleTurnoEspComponent } from './detalle-turno-esp/detalle-turno-esp.component';
import { DetalleResenaEspComponent } from './detalle-resena-esp/detalle-resena-esp.component';

@NgModule({
  declarations: [
    //CrearTurnosComponent,
    //RechazarTurnosComponent,
    //FinalizarTurnoComponent,
    //ResEspeciliastaComponent,
    //PerfilEspecialistaComponent,
    //MisTurnosEspecialistaComponent,
    //MisPacientesComponent,
    //CancelarTurnoEspecialistaComponent,
    //FinalizarTurnoEspecialistaComponent,
    //HistoriaClinicaTurnoEspecialistaComponent,
    //DetalleTurnoEspComponent,
    //DetalleResenaEspComponent
  ],
  exports:[
    CrearTurnosComponent,
    RechazarTurnosComponent,
    FinalizarTurnoComponent,
    ResEspecialistaComponent,
    PerfilEspecialistaComponent,
    MisTurnosEspecialistaComponent,
    MisPacientesComponent,
    CancelarTurnoEspecialistaComponent,
    FinalizarTurnoEspecialistaComponent,
    HistoriaClinicaTurnoEspecialistaComponent,
    DetalleTurnoEspComponent,
    DetalleResenaEspComponent
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CrearTurnosComponent,
    RechazarTurnosComponent,
    FinalizarTurnoComponent,
    ResEspecialistaComponent,
    PerfilEspecialistaComponent,
    MisTurnosEspecialistaComponent,
    MisPacientesComponent,
    CancelarTurnoEspecialistaComponent,
    FinalizarTurnoEspecialistaComponent,
    HistoriaClinicaTurnoEspecialistaComponent,
    DetalleTurnoEspComponent,
    DetalleResenaEspComponent
  ]
})

export class EspecialistaModule { }
