import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Perfil } from '../../interfaces/perfil';
import { UsuarioService } from '../../servicios/usuario.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-gral',
  standalone: true,
  imports: [NgIf, RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './menu-gral.component.html',
  styleUrl: './menu-gral.component.css'
})

export class MenuGralComponent implements OnInit {
  email: string;
  id: string;
  apellido: string;
  nombre: string;
  perfil: string;
  gralPerfil:string;
  listPerfil: Perfil[] = [];

  constructor(private rutas: Router, private unUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.obtener_localstorage();
  }

  inicio(){
    this.rutas.navigate(['bienvenido']);
    window.location.reload();
  }

 /*
  busqueda(){
    this.rutas.navigate(['busqueda']);
  } */

  ngOnChanges(changes: SimpleChanges): void {
      // no hay dato que se modifique
  }

  desloguearse(){
    localStorage.removeItem('user');
    localStorage.removeItem('userPerfil');
    localStorage.removeItem('autorizadoPerfil');
    //localStorage.removeItem('especialaidad');
    //localStorage.removeItem('especialaidadOtra');
    localStorage.removeItem('perfil');
    this.email='';
    this.id='';
    this.perfil='';
    this.gralPerfil='';
    this.rutas.navigate(['bienvenidoLogin']);
  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    //let datoPerfil = JSON.parse(localStorage.getItem('userPerfil'));

    this.email = datoUsuario.email;
    this.id = datoUsuario.uid;
    this.getPerfil(this.email);
  }

  // Usuario/Paciente
  misTurnos(){
    this.rutas.navigate(['paciente/misTurnos']);
  }

  solicitarTurno(){
    this.rutas.navigate(['paciente/solicitarTurno']);
  }
  cancelarTurnos(){
    this.rutas.navigate(['paciente/cancelarTurno']);
  }

  perfilPaciente(){
    this.rutas.navigate(['paciente/perfilPaciente']);
  }

  //Especialista/Medico
  misTurnoEspecialista(){
    this.rutas.navigate(['especialista/misTurnoEsp']);
  }

  solicitarTurnoEspecialista(){
    this.rutas.navigate(['especialista/misTurnosAdm']);
  }

  rechazarTurnoEspecialista(){
    this.rutas.navigate(['especialista/rechazarTurnos']);
  }

  finalizarTurnoEspecialista(){
    this.rutas.navigate(['especialista/finalizarTurno']);
  }

  crearTurnoEspecialista(){
    this.rutas.navigate(['especialista/crearTurnos']);
  }

  resEspecialista(){
    this.rutas.navigate(['especialista/resEsp']);
  }

  perfilEspecialista(){
    this.rutas.navigate(['especialista/perfilEsp'])
  }

  misPacientes(){
    this.rutas.navigate(['especialista/misPacientes'])
  }


  //Administrador
  genUsuarioAdmin(){
    this.rutas.navigate(['admin/genUsAdmin']);
  }

  solicitarTurnoAdmin(){
    this.rutas.navigate(['admin/misTurnosAdm']);
  }
  
  usuarioAdmin(){
    this.rutas.navigate(['admin/usuariosAdmin']);
  }

  habilitarInhabilitar(){
    this.rutas.navigate(['admin/habEsp']);
  }

  Perfil(){
    this.rutas.navigate(['admin/perfilAdm']);
  }
  
  //lo agregue pero no funciona
  /*async Perfil(){        
    this.rutas.navigateByUrl('admin/perfilAdm');    
  }*/
  
  //agregado
  getPerfil(correo:string){
    console.log('correo :', correo);
    this.unUsuario.getPerfilUsuario(correo).subscribe(data => {
         data.forEach((element:any) => {
          this.listPerfil.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })

       })
       //console.log('Gral Perfil - Tipo ',this.listPerfil[0].perfil);

        const usuarioPerfil: Perfil = {
          perfil: this.listPerfil[0].perfil,
          apellido: this.listPerfil[0].apellido,
          nombre: this.listPerfil[0].nombre,
          dni: this.listPerfil[0].dni,
          email: this.listPerfil[0].email,
          aprobadoPorAdmin:this.listPerfil[0].aprobadoPorAdmin,
          especialidad:this.listPerfil[0].especialidad,
          otraEspecialidad:this.listPerfil[0].otraEspecialidad,
          fotoPerfilUno:this.listPerfil[0].fotoPerfilUno,
          fotoPerfilDos:this.listPerfil[0].fotoPerfilDos
        };
        this.gralPerfil = usuarioPerfil.perfil;
        //console.log('Gral Perfil - var ',this.listPerfil[0].perfil);
      });
  }
}