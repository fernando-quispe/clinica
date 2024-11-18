import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisTurnosEspecialistaComponent } from './mis-turnos-especialista/mis-turnos-especialista.component';
import { RechazarTurnosComponent } from './rechazar-turnos/rechazar-turnos.component';
import { FinalizarTurnoComponent } from './finalizar-turno/finalizar-turno.component';
import { CrearTurnosComponent } from './crear-turnos/crear-turnos.component';
import { ResEspecialistaComponent } from './res-especialista/res-especialista.component';
import { PerfilEspecialistaComponent } from './perfil-especialista/perfil-especialista.component';
import { MisPacientesComponent } from './mis-pacientes/mis-pacientes.component';
import { EspecialistaAutorizadoGuard } from '../guards/especialista-autorizado.guard';
import { EspecialistaGuard } from '../guards/especialista.guard';

const routes: Routes = [
  { path: 'misTurnoEsp', component: MisTurnosEspecialistaComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  /*{ path: 'rechazarTurnos', component: RechazarTurnosComponent} //canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},*/
  /*{ path: 'finalizarTurno', component: FinalizarTurnoComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},*/
  { path: 'crearTurnos', component: CrearTurnosComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  /*{ path: 'resEsp', component: ResEspecialistaComponent} //canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},*/
  { path: 'perfilEsp', component: PerfilEspecialistaComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard], data: { animation: 'perfil' }},
  { path: 'misPacientes', component: MisPacientesComponent,canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard]},
  { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EspecialistaRoutingModule { }
