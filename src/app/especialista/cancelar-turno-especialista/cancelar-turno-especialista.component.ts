import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cancelar-turno-especialista',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './cancelar-turno-especialista.component.html',
  styleUrl: './cancelar-turno-especialista.component.css'
})

export class CancelarTurnoEspecialistaComponent implements OnInit {
 
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
     inputCancela: ['',[Validators.required]]
   })
  }

  ngOnInit(): void {
   this.loading = true;
   this.datoRecibidoTurno=this.actualDetalleTurno.fechaSolicitada;
   this.datoRecibidoPaciente=this.actualDetalleTurno.apellidoPaciente+' '+this.actualDetalleTurno.nombrePaciente;
   this.datoRecibidoEspecialidad=this.actualDetalleTurno.especialidad;
  }

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

  limpiar(){
   this.registrarForm.reset({inputCancela:null});
  }
}