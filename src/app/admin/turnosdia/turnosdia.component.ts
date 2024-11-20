import { Component, OnInit } from '@angular/core';
import { TurnosclinicaService } from '../../servicios/turnosclinica.service';
import { Router } from '@angular/router';
import { ExcelService } from '../../servicios/excel.service';
import { NgFor, NgIf } from '@angular/common';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-turnosdia',
  standalone: true,
  imports: [NgIf, NgFor, MenuGralComponent, SpinnerComponent],
  templateUrl: './turnosdia.component.html',
  styleUrl: './turnosdia.component.css'
})

export class TurnosdiaComponent implements OnInit {

  turnos: any[] = [];
  loading = true; 
  diaCount: { [key: string]: number } = {}; // Objeto para contar los turnos por día
  chart: any;

  constructor(private turnosService: TurnosclinicaService, private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {   
    this.turnosService.getIngresos().subscribe(data => {
      this.turnos = data;
      this.loading = false;

      // Llamamos a la función para contar los turnos por día después de recibir los datos
      this.countTurnosPorDia();

      this.createChart();
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
    this.excelService.exportAsExcel(this.turnos, 'turnospordia.');
  }

  // Método para contar los turnos por día
  countTurnosPorDia() {
    this.diaCount = {}; // Reiniciar el conteo de días

    this.turnos.forEach(turno => {
      const dia = turno.dia; // Asegúrate de que el campo 'dia' existe en los datos
      if (dia) {
        this.diaCount[dia] = (this.diaCount[dia] || 0) + 1; // Sumar los turnos por día
      }
    });
  }

  // Función para obtener las claves del objeto diaCount
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

   // Crear el gráfico con Chart.js
   createChart() {
    // Extraer las etiquetas (días) y los datos (conteo de turnos)
    const labels = this.objectKeys(this.diaCount);
    const data = Object.values(this.diaCount);

    // Obtener el contexto del canvas donde se dibujará el gráfico
    const canvas = document.getElementById('turnosPorDiaChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    // Crear el gráfico
    new Chart(ctx, {
      type: 'bar', // Tipo de gráfico (puede ser 'pie', 'line', etc.)
      data: {
        labels: labels, // Las etiquetas (días)
        datasets: [{
          label: 'Cantidad de Turnos',
          data: data, // Los datos (cantidad de turnos)
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo
          borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Días'
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
      pdf.save('turnos_por_dia.pdf');
    });
  }

}