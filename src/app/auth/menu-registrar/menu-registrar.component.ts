import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuInicioComponent } from '../../shared/menu-inicio/menu-inicio.component';

@Component({
  selector: 'app-menu-registrar',
  standalone: true,
  imports: [MenuInicioComponent],
  templateUrl: './menu-registrar.component.html',
  styleUrl: './menu-registrar.component.css'
})

export class MenuRegistrarComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {  }

  paciente(){
    console.log('Registrar Paciente');
    this.rutas.navigate(['auth/registrarPaciente']);
  }

  especialista(){
    console.log('Registrar Especialista');
    this.rutas.navigate(['auth/registrar']);
  }

  admin(){
    console.log('Registrar Admin');
    this.rutas.navigate(['auth/registrarAdmin']);
  }
}