import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { MenuRegistrarComponent } from './menu-registrar/menu-registrar.component';
import { LoginRegistrarUsuarioComponent } from './login-registrar-usuario/login-registrar-usuario.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { LoginRegistrarAdminComponent } from './login-registrar-admin/login-registrar-admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //LoginComponent,
    //LoginRegistrarComponent,
    //MenuRegistrarComponent,
    //LoginRegistrarUsuarioComponent,
    //VerificarCorreoComponent,
    //LoginRegistrarAdminComponent,
  ],  
  exports:[
    LoginComponent,
    LoginRegistrarComponent,
    MenuRegistrarComponent,
    LoginRegistrarUsuarioComponent,
    VerificarCorreoComponent,
    LoginRegistrarAdminComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LoginComponent,
    LoginRegistrarComponent,
    MenuRegistrarComponent,
    LoginRegistrarUsuarioComponent,
    VerificarCorreoComponent,
    LoginRegistrarAdminComponent
  ]
})

export class AuthModule { }