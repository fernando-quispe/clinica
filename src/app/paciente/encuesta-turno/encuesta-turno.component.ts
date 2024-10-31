import { Component, Input, OnInit } from '@angular/core';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-encuesta-turno',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './encuesta-turno.component.html',
  styleUrl: './encuesta-turno.component.css'
})

export class EncuestaTurnoComponent implements OnInit {
  //Datos recibidos
  @Input() actualDetalleTurno: CancelarTurnoPaciente;
  datoRecibidoTurno:string;
  datoRecibidoEspecialista:string;
  datoRecibidoEspecialidad:string;

  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private _usuarioService:UsuarioService) {
    this.registrarForm = this.fb.group({
    inputEncueta: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.loading = true;
    this.datoRecibidoTurno=this.actualDetalleTurno.fechaSolicitada;
    this.datoRecibidoEspecialista=this.actualDetalleTurno.apellidoEspecialista+' '+this.actualDetalleTurno.nombreEspecialista;
    this.datoRecibidoEspecialidad=this.actualDetalleTurno.especialidad;
  }

  registrarCalificacion(){
    console.log('Intentando Actulizar Encuesta emailPaciente ',this.actualDetalleTurno.emailPaciente);
    console.log('Intentando Actulizar Encuesta id ',this.actualDetalleTurno.id);
    let textoEncuenta:string;
    textoEncuenta = this.registrarForm.get('inputEncueta').value;
    console.log('Encueta: ', textoEncuenta);
    this.loading = false;

    this._usuarioService.encuestaTurnoPaciente(this.actualDetalleTurno.id,textoEncuenta).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Encueta registrada con exito!',
        showConfirmButton: false,
        timer: 5000
      })
  }

  limpiar(){
    this.registrarForm.reset({inputEncueta:null});
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