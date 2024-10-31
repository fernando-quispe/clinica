import { Component, Input, OnInit } from '@angular/core';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-historia-clinica-turno-especialista',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './historia-clinica-turno-especialista.component.html',
  styleUrl: './historia-clinica-turno-especialista.component.css'
})

export class HistoriaClinicaTurnoEspecialistaComponent implements OnInit{

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
      inputAltura: ['',[Validators.required]],
      inputPeso: ['',[Validators.required]],
      inputPresion: ['',[Validators.required]],
      inputTemperatura: ['',[Validators.required]],
      inputClave1: [''],
      inputValor1: [''],
      inputClave2: [''],
      inputValor2: [''],
      inputClave3: [''],
      inputValor3: ['']
    })
  }

  ngOnInit(): void {
    this.loading = true;
    this.datoRecibidoTurno=this.actualDetalleTurno.fechaSolicitada;
    this.datoRecibidoPaciente=this.actualDetalleTurno.apellidoPaciente+' '+this.actualDetalleTurno.nombrePaciente;
    this.datoRecibidoEspecialidad=this.actualDetalleTurno.especialidad;
  }

  registrarHistoriaClinica(){
    let textoinputAltura:string;
    let textoinputPeso:string;
    let textoinputPresion:string;
    let textoinputTemperatura: string;
    let textoinputClave1: string;
    let textoinputValor1: string;
    let textoinputClave2: string;
    let textoinputValor2: string;
    let textoinputClave3: string;
    let textoinputValor3: string;

    textoinputAltura = this.registrarForm.get('inputAltura').value;
    textoinputPeso = this.registrarForm.get('inputPeso').value;
    textoinputPresion = this.registrarForm.get('inputPresion').value;
    textoinputTemperatura = this.registrarForm.get('inputTemperatura').value;
    textoinputClave1 = this.registrarForm.get('inputClave1').value;
    textoinputValor1 = this.registrarForm.get('inputValor1').value;
    textoinputClave2 = this.registrarForm.get('inputClave2').value;
    textoinputValor2 = this.registrarForm.get('inputValor2').value;
    textoinputClave3 = this.registrarForm.get('inputClave3').value;
    textoinputValor3 = this.registrarForm.get('inputValor3').value;
    this.loading = false;

    this._usuarioService.guardarHistoriaClinicaServicio(this.actualDetalleTurno.id,textoinputAltura,textoinputPeso,textoinputTemperatura,textoinputPresion,textoinputClave1,textoinputValor1,textoinputClave2,textoinputValor2,textoinputClave3,textoinputValor3).then((res) => {});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Historia Clínica registrada con éxito!',
        showConfirmButton: false,
        timer: 5000
      })
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
        title: 'El turno fue CANCELADO con éxito!',
        showConfirmButton: false,
        timer: 5000
      })
  }
}