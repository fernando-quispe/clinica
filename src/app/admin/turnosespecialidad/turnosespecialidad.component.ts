import { Component, OnInit } from '@angular/core';
import { TurnosclinicaService } from '../../servicios/turnosclinica.service';
import { Router } from '@angular/router';
import { ExcelService } from '../../servicios/excel.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

Chart.register(...registerables);

@Component({
  selector: 'app-turnosespecialidad',
  standalone: true,
  imports: [NgIf, NgFor, MenuGralComponent, SpinnerComponent, FormsModule, CommonModule],
  templateUrl: './turnosespecialidad.component.html',
  styleUrl: './turnosespecialidad.component.css'
})


export class TurnosespecialidadComponent implements OnInit{

  turnos: any[] = [];
  loading = true; 
  especialidades: string[] = ['Médico', 'Medica Clinica', 'Ginecologa']; 
  selectedEspecialidad: string = '';
  especialidadCount: { [key: string]: number } = {}; // Objeto para almacenar la cantidad de turnos por especialidad
  filterPost='';
  chart: any;

  constructor(private turnosService: TurnosclinicaService, private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {   
    this.turnosService.getIngresos().subscribe(data => {
      this.turnos = data;
      this.loading = false;

      // Llamamos a la función para contar los turnos por especialidad después de recibir los datos agre
      this.countTurnosPorEspecialidad();

      // Llamamos a la función para crear el gráfico después de contar los turnos
      this.createChart();
    });
  }

  // Método para contar los turnos por especialidad agre
  countTurnosPorEspecialidad() {
    this.especialidadCount = {}; // Reiniciar los contadores

    this.turnos.forEach(turno => {
      const especialidad = turno.especialidad; // Asegúrate de que el campo es correcto (ajusta si es necesario)
      if (especialidad) {
        this.especialidadCount[especialidad] = (this.especialidadCount[especialidad] || 0) + 1;
      }
    });
  } 

  // Método para filtrar los turnos según la especialidad seleccionada agre
  filteredTurnos() {
    if (this.selectedEspecialidad) {
      return this.turnos.filter(turno => turno.especialidad === this.selectedEspecialidad);
    } else {
      return this.turnos;
    }
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
    this.excelService.exportAsExcel(this.turnos, 'turnosporespecialidad.');
  }

   // Crea el gráfico con Chart.js
   createChart() {
    const labels = Object.keys(this.especialidadCount);
    const data = Object.values(this.especialidadCount);

    const canvas = document.getElementById('especialidadChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar', // Cambiar a 'pie', 'line', etc., si lo deseas
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Cantidad de Turnos',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Especialidades'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cantidad de Turnos'
            }
          }
        }
      }
    });
  }

  exportToPDF(): void {
    // Captura el contenido del div que quieres exportar
    const data = document.getElementById('contentToExport');
    
    html2canvas(data!).then(canvas => {
      const pdf = new jsPDF();
  
      // Convertir el canvas a imagen y agregarla al PDF
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 10, 10, 180, 160); // Ajusta las coordenadas y el tamaño
  
      // Guardar el archivo PDF
      pdf.save('turnos_por_especialidad.pdf');
    });
  }
 

} 