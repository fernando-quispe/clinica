import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HabilitarInhabilitarCuentaComponent } from './habilitar-inhabilitar-cuenta/habilitar-inhabilitar-cuenta.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { GenerarUsuarioAdminComponent } from './generar-usuario-admin/generar-usuario-admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitarTurnoComponent } from '../paciente/solicitar-turno/solicitar-turno.component';
import { TurnosclinicaComponent } from './turnosclinica/turnosclinica.component';
import { LogReportComponent } from './log-report/log-report.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { BaseChartDirective } from 'ng2-charts';
import { TurnosdiaComponent } from './turnosdia/turnosdia.component';
import { TurnosfinalizadosComponent } from './turnosfinalizados/turnosfinalizados.component';
import { TurnospendientesComponent } from './turnospendientes/turnospendientes.component';
import { TurnosespecialidadComponent } from './turnosespecialidad/turnosespecialidad.component';

@NgModule({
  declarations: [
    //HabilitarInahabCuentaComponent,
    //MiPerfilComponent,
    //GenerarUsuarioAdminComponent,
    //UsuaiosComponent
    //solicitarTurnosAdmComponent,  
  ],
  exports:[
    HabilitarInhabilitarCuentaComponent,
    MiPerfilComponent,
    GenerarUsuarioAdminComponent,
    UsuariosComponent,
    SolicitarTurnoComponent,
    TurnosclinicaComponent,
    LogReportComponent,
    IngresosComponent,
    BaseChartDirective,
    TurnosdiaComponent,
    TurnosfinalizadosComponent,
    TurnospendientesComponent,
    TurnosespecialidadComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HabilitarInhabilitarCuentaComponent,
    MiPerfilComponent,
    GenerarUsuarioAdminComponent,
    UsuariosComponent,
    SolicitarTurnoComponent,
    TurnosclinicaComponent,
    LogReportComponent,
    IngresosComponent,
    BaseChartDirective,
    TurnosdiaComponent,
    TurnosfinalizadosComponent,
    TurnospendientesComponent,
    TurnosespecialidadComponent   
  ]
})

export class AdminModule { }
