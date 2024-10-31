import { Component, Input, OnInit } from '@angular/core';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-turno-esp',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './detalle-turno-esp.component.html',
  styleUrl: './detalle-turno-esp.component.css'
})

export class DetalleTurnoEspComponent implements OnInit{

  @Input() actualDetalleTurno: CancelarTurnoPaciente;
  datoRecibidoTurno:string;
  datoRecibidoPaciente:string;
  datoRecibidoEspecialidad:string;

  isdetalletDisabled: boolean = true; //agregue 2610

  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
    private _usuarioService:UsuarioService) {
      this.registrarForm = this.fb.group({
        inputFechaSolicitada: ['',[Validators.required]],
        inputAltura: ['',[Validators.required]],
        inputPeso: ['',[Validators.required]],
        inputPresion: ['',[Validators.required]],
        inputTemperatura: ['',[Validators.required]],
        inputClave1: ['',[Validators.required]],
        inputValor1: ['',[Validators.required]],
        inputClave2: ['',[Validators.required]],
        inputValor2: ['',[Validators.required]],
        inputClave3: ['',[Validators.required]],
        inputValor3: ['',[Validators.required]],
      })
  }

  ngOnInit(): void {
    this.loading = true;
    this.datoRecibidoTurno=this.actualDetalleTurno.fechaSolicitada;
    this.datoRecibidoPaciente=this.actualDetalleTurno.apellidoPaciente+' '+this.actualDetalleTurno.nombrePaciente;
    this.datoRecibidoEspecialidad=this.actualDetalleTurno.especialidad;
    this.registrarForm.controls['inputFechaSolicitada'].setValue(this.actualDetalleTurno.fechaSolicitada);
    this.registrarForm.controls['inputAltura'].setValue(this.actualDetalleTurno.altura);
    this.registrarForm.controls['inputPeso'].setValue(this.actualDetalleTurno.peso);
    this.registrarForm.controls['inputPresion'].setValue(this.actualDetalleTurno.presion);
    this.registrarForm.controls['inputTemperatura'].setValue(this.actualDetalleTurno.temperatura);
    this.registrarForm.controls['inputClave1'].setValue(this.actualDetalleTurno.clave1);
    this.registrarForm.controls['inputValor1'].setValue(this.actualDetalleTurno.valor1);
    this.registrarForm.controls['inputClave2'].setValue(this.actualDetalleTurno.clave2);
    this.registrarForm.controls['inputValor2'].setValue(this.actualDetalleTurno.valor2);
    this.registrarForm.controls['inputClave3'].setValue(this.actualDetalleTurno.clave3);
    this.registrarForm.controls['inputValor3'].setValue(this.actualDetalleTurno.valor3);
  }

  cerrarResenia(){
    this.loading = false;
  }

  limpiar(){
    this.registrarForm.reset({inputCancela:null});
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
}