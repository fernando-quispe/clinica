import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Turno } from '../../interfaces/turno';
import { UsuarioService } from '../../servicios/usuario.service';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { OrdenarArrayPipe } from '../../shared/pipes/ordenar-array.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-turnos',
  standalone: true,
  imports: [SpinnerComponent, NgIf, NgFor, OrdenarArrayPipe],
  templateUrl: './crear-turnos.component.html',
  styleUrl: './crear-turnos.component.css'
})

export class CrearTurnosComponent implements OnInit {

  //Interfaz Turno
  apellido:string;
  nombre:string;
  email:string;
  especialidad:string;
  otraespecialidad:string;
  fotoPerfilUno:string;
  // bandera cargando
  loading = false;
  //Array de turnos
  listaTurno: Turno[]=[];
  listaTurnoDocAtiende: Turno[]=[];
  arrayTurnosUnidos: Turno[]=[];
  suscriptionList: Subscription = new Subscription();

  constructor(private _usuarioService:UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.obtener_localstorage();
    this.llenarListaTurno();
    this.getTurnosDrServicio(this.email);
    //this.filtrarTurnosAtiende();
    //this.oso();
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
  }

  obtener_localstorage(){
    let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
    this.apellido = datoPerfil.apellido;
    this.nombre = datoPerfil.nombre;
    this.email = datoPerfil.email;
    this.especialidad = datoPerfil.especialidad;
    this.otraespecialidad = datoPerfil.otraEspecialidad;
    this.fotoPerfilUno = datoPerfil.fotoPerfilUno;
    //this.llenarListaTurno();
  }

  habilitarEspecialidad(item: any){
    const dato: Turno = {
      apellido: item.apellido,
      nombre: item.nombre,
      email: item.email,
      especialidad:item.especialidad,
      otraespecialidad: '',
      turno: item.turno,
      fotoPerfilUno:item.fotoPerfilUno,
      //estado:'Libre',
      estado:'Atiende',
      dia:item.dia
    };
    this._usuarioService.crearTurno(dato).then(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno fue registrado con éxito!',
        showConfirmButton: false,
        timer: 5000
      })
    }).catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al Grabar Turno',
        showConfirmButton: false,
        timer: 5000
      })
    });
  }

  habilitarOtraEspecialidad(item: any){
    const dato: Turno = {
      apellido: item.apellido,
      nombre: item.nombre,
      email: item.email,
      especialidad:item.otraespecialidad,
      otraespecialidad: '',
      turno: item.turno,
      fotoPerfilUno:item.fotoPerfilUno,
      //estado:'Libre',
      estado:'Atiende',
      dia:item.dia
    };
    this._usuarioService.crearTurno(dato).then(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno fue registrado con éxito! (Esp 2)',
        showConfirmButton: false,
        timer: 5000
      })
    }).catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al Grabar Turno',
        showConfirmButton: false,
        timer: 5000
      })
    });
  }

  eliminarHorarioLaboral(item: any){
    console.log('Entramos a eliminarHorarioLaboral');
    this._usuarioService.eleminarHorarioLaboralTurno(item.id).then(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Horario Laboral fue liberado con éxito!',
        showConfirmButton: false,
        timer: 5000
      })
    }).catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al Borrar Horario Laboral',
        showConfirmButton: false,
        timer: 5000
      })
    });
  }

  llenarListaTurno(){

    //LUNES
    const lunes1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes1);

    const lunes2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes2);

    const lunes3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes3);

    const lunes4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes4);

    const lunes5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes5);

    const lunes55: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:30 a 11:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes55);

    const lunes6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes6);

    const lunes66: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:30 a 12:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes66);

    const lunes7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes7);

    const lunes12: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:30 a 13:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes12);

    const lunes8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes8);

    const lunes9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes9);

    const lunes10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes10);

    const lunes11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes11);

    const lunes13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes13);

    const lunes14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes14);

    const lunes15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes15);

    const lunes16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes16);

    const lunes17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes17);

    const lunes18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes18);

    const lunes19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes19);

    const lunes20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Lunes'
    };
    this.listaTurno.push(lunes20);

    //MARTES
    const martes1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes1);

    const martes2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes2);

    const martes3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes3);

    const martes4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes4);

    const martes5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes5);

    const martes55: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:30 a 11:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes55);

    const martes6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes6)

    const martes66: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:30 a 12:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes66)

    const martes7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes7)

    const martes77: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:30 a 13:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes77)

    const martes8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes8)

    const martes9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes9)

    const martes10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes10)

    const martes11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes11)

    const martes13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes13)

    const martes14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes14)

    const martes15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes15)

    const martes16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes16)

    const martes17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes17)

    const martes18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes18)

    const martes19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes19)

    const martes20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Martes'
    };
    this.listaTurno.push(martes20)

    //MIERCOLES
    const miercoles1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles1);

    const miercoles2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles2);

    const miercoles3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles3);

    const miercoles4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles4);

    const miercoles5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles5);

    const miercoles55: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:30 a 11:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles55);

    const miercoles6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles6);

    const miercoles66: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:30 a 12:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles66)

    const miercoles7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles7)

    const miercoles77: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:30 a 13:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles77)

    const miercoles8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles8)

    const miercoles9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles9)

    const miercoles10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles10)

    const miercoles11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles11)

    const miercoles13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles13);


    const miercoles14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles14);

    const miercoles15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles15);

    const miercoles16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles16);

    const miercoles17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles17);

    const miercoles18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles18);

    const miercoles19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles19);

    const miercoles20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Miercoles'
    };
    this.listaTurno.push(miercoles20);

     //JUEVES
     const jueves1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves1);

    const jueves2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves2);

    const jueves3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves3);

    const jueves4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves4);

    const jueves5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves5);

    const jueves55: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:30 a 11:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves55);

    const jueves6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves6);

    const jueves66: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:30 a 12:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves66);

    const jueves7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves7);

    const jueves77: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:30 a 13:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves77);

    const jueves8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves8);

    const jueves9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves9);

    const jueves10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves10);

    const jueves11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves11);

    const jueves13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves13);

    const jueves14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves14);

    const jueves15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves15)

    const jueves16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves16);

    const jueves17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves17);

    const jueves18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves18);

    const jueves19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves19);

    const jueves20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Jueves'
    };
    this.listaTurno.push(jueves20);

    //VIERNES
    const viernes1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes1);

    const viernes2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes2);

    const viernes3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes3);

    const viernes4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes4);

    const viernes5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes5);

    const viernes55: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:30 a 11:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes55);

    const viernes6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes6);

    const viernes66: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:30 a 12:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes66);

    const viernes7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes7);

    const viernes77: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:30 a 13:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes77);

    const viernes8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes8);

    const viernes9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes9);

    const viernes10: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:00 a 14:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes10);

    const viernes11: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '14:30 a 15:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes11);

    const viernes13: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:00 a 15:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes13);

    const viernes14: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '15:30 a 16:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes14);

    const viernes15: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:00 a 16:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes15);

    const viernes16: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '16:30 a 17:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes16);

    const viernes17: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:00 a 17:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes17);

    const viernes18: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '17:30 a 18:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes18);

    const viernes19: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:00 a 18:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes19);

    const viernes20: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '18:30 a 19:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Viernes'
    };
    this.listaTurno.push(viernes20);

    //SÁBADO
    const sabado1: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:00 a 08:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado1);

    const sabado2: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '08:30 a 09:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado2);

    const sabado3: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:00 a 09:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado3);

    const sabado4: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '09:30 a 10:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado4);

    const sabado5: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:00 a 10:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado5);

    const sabado55: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '10:30 a 11:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado55);

    const sabado6: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:00 a 11:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado6);

    const sabado66: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '11:30 a 12:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado66);

    const sabado7: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:00 a 12:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado7);

    const sabado77: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '12:30 a 13:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado77);

    const sabado8: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:00 a 13:30 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado8);

    const sabado9: Turno = {
      apellido: this.apellido,
      nombre: this.nombre,
      email: this.email,
      especialidad:this.especialidad,
      otraespecialidad: this.otraespecialidad,
      turno: '13:30 a 14:00 hs',
      fotoPerfilUno:this.fotoPerfilUno,
      estado:'Libre',
      dia:'Sabado'
    };
    this.listaTurno.push(sabado9);


    console.log('listaTurno ', this.listaTurno);
  }

  getTurnosDrServicio(emailDoc:string){
    this.suscriptionList == this._usuarioService.getTurnosDr(emailDoc).subscribe(data =>{
      //console.log(data);
      this.listaTurnoDocAtiende = [];
      data.forEach((element:any) => {
          this.listaTurnoDocAtiende.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        //Filtramos los Especialistas
        /* this.listaUsuarioEspecialista = this.listaUsuarioEspecialista.filter((obj) => {
          return (obj.especialidad === param || obj.otraEspecialidad === param ) &&  obj.aprobadoPorAdmin === 'SI';
        }); */

        console.log("listaTurnoDocAtiende  ", this.listaTurnoDocAtiende);
        this.filtrarTurnosAtiende();
    })
    //this.filtrarTurnosAtiende();
  }

  public filtrarTurnosAtiende()
  {
    //listaTurnoDocAtiende : Tiene la lista de los Turnos tomados por el Especialista.
    //listaTurno : Tiene todos los turnos que puede tomar un Espacialista.
    let arrayAux:Turno[]=[];
    this.arrayTurnosUnidos= [];
    arrayAux = this.listaTurno;
    //Sacamos de la listaTurnos los turnos que atiende el especialista
    this.listaTurnoDocAtiende.forEach((element) =>{

      arrayAux = arrayAux.filter((a) =>{
          if (a.dia === element.dia && a.turno === element.turno)
          {
            return 0;
          }
          else
          { return 1;}
        })
    });
    console.log('arrayAux ',arrayAux);

    this.listaTurnoDocAtiende.forEach((element) =>{
      arrayAux.push(element);
    });

    //Agregamos los horarios que atiende el especialista
    this.arrayTurnosUnidos = arrayAux;
    console.log('arrayTurnosUnidos con Atiende ',this.arrayTurnosUnidos);
    //console.log('arrayAux con Atiende ',arrayAux);
  }

  /* oso(){
    const listaTurno = ['perro', 'gato', 'oso', 'pájaro', 'hormiga'];

    const listaTurnoDocAtiende = ['perro', 'gato'];

    //listaTurnoDocAtiende : Tiene la lista de los Turnos tomados por el Especialista.
    //listaTurno : Tiene todos los turnos que puede tomar un Espacialista.

    let arrayTurnosUnidos= [];
    let arrayAux = listaTurno;

    listaTurnoDocAtiende.forEach((element) =>{

      arrayAux = arrayAux.filter((a) =>{
          if (a=== element)
          {
            return 0;
          }
          else
          {  return 1;}
        })
      });

    console.log('Se quito -> perro gato ',arrayAux)
  } */
  dog:any;
  onItemChange(value:any){
    console.log(" Value is : ", value );
  }
//Fin Componente

volver() {
  //localStorage.removeItem('loggedUser');
  this.router.navigateByUrl('/bienvenido')
}

}