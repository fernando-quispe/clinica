import { Component, Input, OnInit } from '@angular/core';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-historia-clinica-esp',
  standalone: true,
  imports: [],
  templateUrl: './historia-clinica-esp.component.html',
  styleUrl: './historia-clinica-esp.component.css'
})

export class HistoriaClinicaEspComponent implements OnInit {
  //Datos recibidos
  @Input() actualDetalleTurno: CancelarTurnoPaciente;
  datoRecibidoTurno:string;
  datoRecibidoPaciente:string;
  datoRecibidoEspecialidad:string;
  datoEmailPaciente:string;
  datoEmailEspecialista:string;

  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;

  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    this.datoRecibidoTurno=this.actualDetalleTurno.fechaSolicitada;
    this.datoRecibidoPaciente=this.actualDetalleTurno.apellidoPaciente+' '+this.actualDetalleTurno.nombrePaciente;
    this.datoRecibidoEspecialidad=this.actualDetalleTurno.especialidad;
    this.datoEmailPaciente=this.actualDetalleTurno.emailPaciente;
    this.datoEmailEspecialista=this.actualDetalleTurno.emailEspecialista;
    this.registrarForm.controls['inputResena'].setValue(this.actualDetalleTurno.resena);
    console.log('Email Paciente ',this.datoEmailPaciente);
    console.log('Email Esp ',this.datoEmailEspecialista);
  }
}