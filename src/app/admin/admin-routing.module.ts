import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarUsuarioAdminComponent } from './generar-usuario-admin/generar-usuario-admin.component';
import { HabilitarInhabilitarCuentaComponent } from './habilitar-inhabilitar-cuenta/habilitar-inhabilitar-cuenta.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AutGuard } from '../guards/aut.guard';
import { SolicitarTurnoComponent } from '../paciente/solicitar-turno/solicitar-turno.component';

const routes: Routes = [
  { path: 'genUsAdmin', component: GenerarUsuarioAdminComponent}, //,canActivate:[AutGuard]},
  { path: 'habEsp', component: HabilitarInhabilitarCuentaComponent}, //,canActivate:[AutGuard]},
  { path: 'perfilAdm', component: MiPerfilComponent}, //,canActivate:[AutGuard]},
  { path: 'usuariosAdmin', component: UsuariosComponent}, //,canActivate:[AutGuard]},
  { path: 'misTurnosAdm', component: SolicitarTurnoComponent},
  { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
