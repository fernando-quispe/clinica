import { Component, Input, OnInit } from '@angular/core';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { disableDebugTools } from '@angular/platform-browser';
import { disableNetwork } from '@angular/fire/firestore';

@Component({
  selector: 'app-res-especialista',
  standalone: true,
  imports: [MenuGralComponent, NgIf, ReactiveFormsModule],
  templateUrl: './res-especialista.component.html',
  styleUrl: './res-especialista.component.css'
})

export class ResEspecialistaComponent implements OnInit {

  //Datos recibidos
  @Input() actualDetalleTurno: CancelarTurnoPaciente;
  datoRecibidoTurno:string;
  datoRecibidoPaciente:string;
  datoRecibidoEspecialidad:string;

  isResDisabled: boolean = true; //agregue 2610

  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private _usuarioService:UsuarioService) {
    this.registrarForm = this.fb.group({
      inputResena: ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    this.loading = true;
    this.datoRecibidoTurno=this.actualDetalleTurno.fechaSolicitada;
    this.datoRecibidoPaciente=this.actualDetalleTurno.apellidoPaciente+' '+this.actualDetalleTurno.nombrePaciente;
    this.datoRecibidoEspecialidad=this.actualDetalleTurno.especialidad;
    this.registrarForm.controls['inputResena'].setValue(this.actualDetalleTurno.resena);
  }

  cerrarResenia(){
    this.loading = false;
  }

  limpiar(){
    this.registrarForm.reset({inputCancela:null});
  }

  //agregao riv - sacar de ultima
  registrarCancelar(){
    //console.log('Intentando Actulizar Cancelado emailPaciente ',this.actualDetalleTurno.emailPaciente);
    //console.log('Intentando Actulizar Cancelado id ',this.actualDetalleTurno.id);
    let motivoCancelacion:string;
    motivoCancelacion = this.registrarForm.get('inputCancela').value;
    //console.log('Nota de Cancelacion: ', motivoCancelacion);
    this.loading = false;
 
    this._usuarioService.cancelarTurnoPaciente(this.actualDetalleTurno.id,'CANCELADO',motivoCancelacion).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Turno fue CANCELADO con éxito!',
        showConfirmButton: false,
        timer: 5000
      })
   }
}