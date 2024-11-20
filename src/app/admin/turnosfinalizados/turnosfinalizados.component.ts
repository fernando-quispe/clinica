import { Component, OnInit } from '@angular/core';
import { TurnospacienteService } from '../../servicios/turnospaciente.service';
import { Router } from '@angular/router';
import { ExcelService } from '../../servicios/excel.service';
import { NgFor, NgIf } from '@angular/common';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-turnosfinalizados',
  standalone: true,
  imports: [NgIf, NgFor, MenuGralComponent, SpinnerComponent],
  templateUrl: './turnosfinalizados.component.html',
  styleUrl: './turnosfinalizados.component.css'
})

export class TurnosfinalizadosComponent implements OnInit {

  turnopaciente: any[] = [];
  loading = true; 
  turnosPorEspecialista: any = {}; // Objeto para almacenar la cantidad de turnos finalizados por especialista
  Object: any;

  constructor(private turnospacienteService: TurnospacienteService, private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {   
    this.turnospacienteService.getIngresos().subscribe(data => {
      this.turnopaciente = data;
      this.loading = false;
    });
  }

  obtenerFechaYHora(timestamp: number) {
    const date = new Date(timestamp);
    const dia = date.toLocaleDateString();
    const hora = date.toLocaleTimeString();
    return { dia, hora };
  }
  
  volver() {    
    this.router.navigateByUrl('/bienvenido')
  }

  downloadExcel() {
    this.excelService.exportAsExcel(this.turnopaciente, 'turnosfinalizados.');
  }
}