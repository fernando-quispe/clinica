import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgIf } from '@angular/common';
import { HistoriaClinicaTurnoEspecialistaComponent } from '../../especialista/historia-clinica-turno-especialista/historia-clinica-turno-especialista.component';
import { HistoriaClinicaComponent } from '../historia-clinica/historia-clinica.component';
import { HistoriaClinicaEspComponent } from '../historia-clinica-esp/historia-clinica-esp.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-paciente',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent, NgIf, HistoriaClinicaComponent],
  templateUrl: './perfil-paciente.component.html',
  styleUrl: './perfil-paciente.component.css'
})

export class PerfilPacienteComponent implements OnInit {

  loading = false;
  apellido: string;
  nombre:string;
  dni: string;
  correo: string;
  perfil: string;
  foto1: string;
  foto2: string;
  verHistoriaClinica:boolean = false;
  verHistoriaClinicaEsp:boolean = false;

  constructor(private _usuarioService:UsuarioService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.leerDatos();
  }

  leerDatos(){
    let leePerfil = JSON.parse(localStorage.getItem("perfil"));
    this.apellido = leePerfil.apellido;
    this.nombre = leePerfil.nombre;
    this.dni = leePerfil.dni;
    this.correo = leePerfil.email;
    this.perfil = leePerfil.perfil;
    this.foto1 = leePerfil.fotoPerfilUno;    ;
    this.foto2 = leePerfil.fotoPerfilDos;
  }

  mostrarHistoriaClinica(){
      this.verHistoriaClinica=true;
  }

  mostrarHistoriaClinicaEsp(){
    this.verHistoriaClinicaEsp=true;
  }

  volver() {
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/bienvenido')
  }
}