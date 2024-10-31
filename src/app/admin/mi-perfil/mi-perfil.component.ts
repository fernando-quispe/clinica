import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent, NgIf],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})

export class MiPerfilComponent implements OnInit {
  loading = false;
  apellido: string;
  nombre:string;
  dni: string;
  correo: string;
  perfil: string;
  foto1: string;

  constructor(private _usuarioService:UsuarioService, private router: Router) { }

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
    this.foto1 = leePerfil.fotoPerfilUno;    
  }

  volver() {
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/bienvenido')
  }
}