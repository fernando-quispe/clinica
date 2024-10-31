import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TurnoPaciente } from '../../clases/turno-paciente';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgFor, NgIf } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { CancelarTurnoEspecialistaComponent } from '../cancelar-turno-especialista/cancelar-turno-especialista.component';
import { FinalizarTurnoEspecialistaComponent } from '../finalizar-turno-especialista/finalizar-turno-especialista.component';
import { HistoriaClinicaTurnoEspecialistaComponent } from '../historia-clinica-turno-especialista/historia-clinica-turno-especialista.component';
import { ResEspecialistaComponent } from '../res-especialista/res-especialista.component';
import { FilterEspecialistaPipe } from '../../shared/pipes/filter-especialista.pipe';
import { OrdenarArrayPipe } from '../../shared/pipes/ordenar-array.pipe';
import { PacienteService } from '../../servicios/paciente.service';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-turnos-especialista',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent, NgIf, NgFor, FormsModule, CancelarTurnoEspecialistaComponent, FinalizarTurnoEspecialistaComponent,
            HistoriaClinicaTurnoEspecialistaComponent, ResEspecialistaComponent, FilterEspecialistaPipe, OrdenarArrayPipe ],
  templateUrl: './mis-turnos-especialista.component.html',
  styleUrl: './mis-turnos-especialista.component.css'
})

export class MisTurnosEspecialistaComponent implements OnInit {
  
  public listaTurnoPaciente: TurnoPaciente[] = [];
  public listaUsuarioPaciente: Usuario[] = []; //AGREGUE 26 10
  suscriptionList: Subscription = new Subscription();
  loading = false;
   //Formulario Validar
   registrarForm: FormGroup;
   activarCancelar:boolean = false;
   activarFinalizar:boolean = false;
   activarHistoriaClinica:boolean = false;
   activarVerResena:boolean = false;
   actualTurno: CancelarTurnoPaciente;
  //Paciente
  apellidoPaciente:string;
  nombrePaciente:string;
  emailEspecialista:string;
  fotoPerfilUnoPaciente:string;
  fotoPerfilDosPaciente:string;
  dniPaciente:string;
  inputCancelado:string;
  inputResena:string;
  inputDiagnotico:string;
  //HC
  inputAltura:string;
  inputPeso:string;
  inputTemperatura:string;
  inputPresion:string;
  inputClave1?:string;
  inputValor1?:string;
  inputClave2?:string;
  inputValor2?:string;
  inputClave3?:string;
  inputValor3?:string;
  //Filtro
  filterPost='';

  constructor(
    private _usuarioService:UsuarioService,
    private _turnopacienteService: PacienteService, // LO AGREGUE 26 10 
    private router: Router) 
    { 

  }

  ngOnInit(): void {
    this.obtener_localstorage();
    this.getList();
  }

  ngOnDestroy(): void {
  //this.suscriptionUser.unsubscribe();
  this.suscriptionList.unsubscribe();
  }

  obtener_localstorage(){
    let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
    this.apellidoPaciente=datoPerfil.apellido;
    this.nombrePaciente=datoPerfil.nombre;
    this.emailEspecialista=datoPerfil.email;
    this.fotoPerfilUnoPaciente=datoPerfil.fotoPerfilUno;
    this.fotoPerfilDosPaciente=datoPerfil.fotoPerfilDos;
    this.dniPaciente=datoPerfil.dni;

    //console.log('Email del Paciente --> ', this.emailEspecialista);
  }

  getList() {
    //console.log("Lista MisTurnos - Buscar con ",this.emailEspecialista);
    this.suscriptionList == this._usuarioService.getTurnoEspecialista(this.emailEspecialista).subscribe(data =>{
      this.listaTurnoPaciente = [];
      data.forEach((element:any) => {
        this.listaTurnoPaciente.push({
        id:element.payload.doc.id,
        ...element.payload.doc.data()
        })
      });
      console.log("Lista MisTurnos ",this.listaTurnoPaciente);
    })
  }

  cancelarTurno(item: any) {
    this.activarCancelar=true;
    this.actualTurno=item;
  }

  finalizadaAtencion(item: any) {
    this.activarFinalizar=true;
    this.actualTurno=item;
  }

  aceptarTurno(item: any){
      //this._usuarioService.aceptarTurnoEspecialista(item.id,'ACEPTADO').then((res) => {});
      this._usuarioService.aceptarTurnoEspecialista(item.id,'ACEPTADO').then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno fue ACEPTADO con éxito.',
        showConfirmButton: false,
        timer: 5000
      })
  }

  guardarHistoriaClinica(item:any){
    this.activarHistoriaClinica=true;
    this.actualTurno=item;
  }

  verResena(item: any) {
    this.activarVerResena=true;
    this.actualTurno=item;
  }

  volver() {
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/bienvenido')
  }

}