import { Component, Input, OnInit } from '@angular/core';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-finalizar-turno-especialista',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './finalizar-turno-especialista.component.html',
  styleUrl: './finalizar-turno-especialista.component.css'
})

export class FinalizarTurnoEspecialistaComponent implements OnInit {

  //Datos recibidos
  @Input() actualDetalleTurno: CancelarTurnoPaciente;
  datoRecibidoTurno:string;
  datoRecibidoPaciente:string;
  datoRecibidoEspecialidad:string;

  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private _usuarioService:UsuarioService) {
    this.registrarForm = this.fb.group({
      inputResena: ['',[Validators.required]],
      inputDiagnostico: ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    this.loading = true;
    this.datoRecibidoTurno=this.actualDetalleTurno.fechaSolicitada;
    this.datoRecibidoPaciente=this.actualDetalleTurno.apellidoPaciente+' '+this.actualDetalleTurno.nombrePaciente;
    this.datoRecibidoEspecialidad=this.actualDetalleTurno.especialidad;
  }

  registrarFinalizar(){
    let textoResena:string;
    let textoDiagnostico:string;
    textoResena = this.registrarForm.get('inputResena').value;
    textoDiagnostico = this.registrarForm.get('inputDiagnostico').value;
    this.loading = false;

    this._usuarioService.finalizadaAtencion(this.actualDetalleTurno.id,'FINALIZADO',textoResena,textoDiagnostico).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Turno Finalizado con exito!',
        showConfirmButton: false,
        timer: 5000
      })
  }

  limpiar(){
    this.registrarForm.reset({inputCancela:null});
  }

  //Agregado para verificarlo
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
        title: 'El turno fue CANCELADO con éxito!',
        showConfirmButton: false,
        timer: 5000
      })
  }
}