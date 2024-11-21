import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuRegistrarComponent } from './menu-registrar/menu-registrar.component';
import { LoginRegistrarUsuarioComponent } from './login-registrar-usuario/login-registrar-usuario.component';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { LoginRegistrarAdminComponent } from './login-registrar-admin/login-registrar-admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'MenuRegistrar', component: MenuRegistrarComponent, data: { animation: 'MenuRegistrar' } },
  { path: 'registrarPaciente', component: LoginRegistrarUsuarioComponent},
  //{ path: 'registrarAdmin', component: LoginRegistrarAdminComponent},
  { path: 'registrar', component: LoginRegistrarComponent},
  { path: 'verificarCorreo', component: VerificarCorreoComponent},
  { path: '', redirectTo: 'login',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }