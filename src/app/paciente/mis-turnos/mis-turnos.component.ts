import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TurnoPaciente } from '../../clases/turno-paciente';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
import { Usuario } from '../../clases/usuario';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { CancelarTurnoComponent } from '../cancelar-turno/cancelar-turno.component';
import { CalificarTurnoComponent } from '../calificar-turno/calificar-turno.component';
import { ResenaTurnoComponent } from '../resena-turno/resena-turno.component';
import { EncuestaTurnoComponent } from '../encuesta-turno/encuesta-turno.component';
import { FilterPipe } from "../../shared/pipes/filter.pipe";
import { ResaltarDirective } from '../../directivas/resaltar.directive';

@Component({
  selector: 'app-mis-turnos',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent, NgIf, NgFor, FormsModule, CancelarTurnoComponent, CalificarTurnoComponent,
            ResenaTurnoComponent, EncuestaTurnoComponent, CommonModule, FilterPipe, ResaltarDirective],
  templateUrl: './mis-turnos.component.html',
  styleUrl: './mis-turnos.component.css'
})

export class MisTurnosComponent implements OnInit {
  public listaTurnoPaciente: TurnoPaciente[] = [];
  suscriptionList: Subscription = new Subscription();
  loading:boolean = false;

  //Formulario Validar
  registrarForm: FormGroup;
  activarCancelar:boolean;
  activarCalificacion:boolean = false;
  activarVerResena:boolean = false;
  activarEncuesta:boolean = false;  
  actualTurno: CancelarTurnoPaciente;

  //Paciente
  usuarioPacienteMailIngresado:any;
  apellidoPaciente:string;
  nombrePaciente:string;
  emailPaciente:string;
  fotoPerfilUnoPaciente:string;
  fotoPerfilDosPaciente:string;
  dniPaciente:string;
  //inputCancelado:string;
  inputCalificacion:string;
  //Filtro
  filterPost='';

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private _usuarioService:UsuarioService,
    private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.obtener_localstorage();
    this.getList();
    this.activarCancelar=false;
  }

  ngOnDestroy(): void {
  //this.suscriptionUser.unsubscribe();
  this.suscriptionList.unsubscribe();
  }

  obtener_localstorage(){
    let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
    this.apellidoPaciente=datoPerfil.apellido;
    this.nombrePaciente=datoPerfil.nombre;
    this.emailPaciente=datoPerfil.email;
    this.fotoPerfilUnoPaciente=datoPerfil.fotoPerfilUno;
    this.fotoPerfilDosPaciente=datoPerfil.fotoPerfilDos;
    this.dniPaciente=datoPerfil.dni;
    //console.log('Email del Paciente --> ', this.emailPaciente);
  }

  getList() {
    //console.log("Lista MisTurnos - Buscar con ",this.emailPaciente);
      this.suscriptionList == this._usuarioService.getTurnoPacientes(this.emailPaciente).subscribe(data =>{
      //console.log(data);
      this.listaTurnoPaciente = [];
      data.forEach((element:any) => {
        this.listaTurnoPaciente.push({
        id:element.payload.doc.id,
        ...element.payload.doc.data()
        })
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
      });
      console.log("Lista MisTurnos ",this.listaTurnoPaciente);
    })
  }

  cancelarTurno(item:any){
    this.activarCancelar=true;
    this.actualTurno=item;
  }

  /*calificarAtencion(item: any) {
    //console.log('Input ',this.inputCalificacion);
    if (this.inputCalificacion === undefined) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Escribir la calificacón del Especialista !!!',
        showConfirmButton: false,
        timer: 5000
      })
    }else{
      this._usuarioService.calificacionTurnoPaciente(item.id,this.inputCalificacion).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Calificacón registrada con éxito!',
        showConfirmButton: false,
        timer: 5000
      })
    }
  }*/

  calificarAtencion(item:any) {
    //console.log("calificar Turno " , item);
    this.activarCalificacion=true;
    this.actualTurno=item;
  }

  encuesta(item:any){
    this.activarEncuesta=true
    this.actualTurno=item;
  }

  verResena(item: any) {
    //console.log("verResena " , item);
    this.activarVerResena=true;
    this.actualTurno=item;
  }

  limpiar(){
    //this.registrarForm.reset({inputCancela:null});
  }

  volver() {
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/bienvenido')
  }

}