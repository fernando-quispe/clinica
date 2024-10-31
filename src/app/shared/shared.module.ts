import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MenuGralComponent } from './menu-gral/menu-gral.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GithubComponent } from './github/github.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterEspecialistaPipe } from './pipes/filter-especialista.pipe';
import { OrdenarArrayPipe } from './pipes/ordenar-array.pipe';


@NgModule({
  declarations: [
    //MenuGralComponent,
    //SpinnerComponent,
    //GithubComponent,
    //MenuInicioComponent,
    //FilterPipe,
    //FilterEspecialistaPipe,
    //OrdenarArrayPipe,
  ],

  exports:[
    MenuGralComponent,
    SpinnerComponent,
    GithubComponent,
    MenuInicioComponent,
    FilterPipe, 
    FilterEspecialistaPipe, 
    OrdenarArrayPipe
  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    MenuGralComponent,
    SpinnerComponent,
    GithubComponent,
    MenuInicioComponent,
    FilterPipe, 
    FilterEspecialistaPipe, 
    OrdenarArrayPipe
  ]
})

export class SharedModule { }