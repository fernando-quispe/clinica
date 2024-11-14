import { Component, Input, OnInit } from '@angular/core';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cancelar-turno',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './cancelar-turno.component.html',
  styleUrl: './cancelar-turno.component.css'
})

export class CancelarTurnoComponent implements OnInit {

 //Datos recibidos
 @Input() actualDetalleTurno: CancelarTurnoPaciente;
 datoRecibidoTurno:string;
 datoRecibidoEspecialista:string;
 datoRecibidoEspecialidad:string;

 //Formulario Validar
 registrarForm: FormGroup;
 loading = false;

  constructor(private fb: FormBuilder,
             private _usuarioService: UsuarioService) {
     this.registrarForm = this.fb.group({
       inputCalificar: ['',[Validators.required]]
     })
  }

  ngOnInit(): void {
   this.loading = true;
   this.datoRecibidoTurno=this.actualDetalleTurno.fechaSolicitada;
   this.datoRecibidoEspecialista=this.actualDetalleTurno.apellidoEspecialista+' '+this.actualDetalleTurno.nombreEspecialista;
   this.datoRecibidoEspecialidad=this.actualDetalleTurno.especialidad;
  }

  registrarCalificacion(){
   console.log('Intentando Actulizar Cancelado emailPaciente ',this.actualDetalleTurno.emailPaciente);
   console.log('Intentando Actulizar Cancelado id ',this.actualDetalleTurno.id);
   let motivoCalificacion:string;
   motivoCalificacion = this.registrarForm.get('inputCalificar').value;
   console.log('Nota de Cancelacion: ', motivoCalificacion);
   this.loading = false;

   this._usuarioService.calificacionTurnoPaciente(this.actualDetalleTurno.id,motivoCalificacion).then((res) => {});
     Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: 'Su Turno fue calificado con exito!',
       showConfirmButton: false,
       timer: 5000
     })
  }

  limpiar(){
   this.registrarForm.reset({inputCalificar:null});
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