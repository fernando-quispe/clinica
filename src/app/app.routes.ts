import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BienvenidoLoginComponent } from './bienvenido-login/bienvenido-login.component';

export const routes: Routes = [
    
    { path: 'bienvenido',component: BienvenidoComponent}, //,canActivate:[AutGuard]
    { path: 'bienvenidoLogin',component: BienvenidoLoginComponent},
    //{ path: 'busqueda',component: BusquedaComponent },
    { path: 'auth', 
      loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
    { path: 'paciente',//canActivate: [PacienteGuard],
              loadChildren: () => import('./paciente/paciente.module')
              .then(m => m.PacienteModule)},
    { path: 'especialista',//canActivate: [EspecialistaGuard,EspecialistaAutorizadoGuard],
              loadChildren: () => import('./especialista/especialista.module')
              .then(m => m.EspecialistaModule)},
    { path: 'admin',//canActivate: [AutGuard],
               loadChildren: () => import('./admin/admin.module')
               .then( m => m.AdminModule)  },
    { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
  function canActivate(arg0: string, canActivate: any, arg2: any[]) {
    throw new Error('Function not implemented.');
}

export class AppRoutes { }