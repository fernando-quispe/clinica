import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../servicios/ingresos.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { ExcelService } from '../../servicios/excel.service';
//import { Chart } from 'chart.js';
//import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';
import {Chart, registerables} from 'chart.js/auto';
import { ChartComponent } from '../chart/chart.component';
import autoTable from 'jspdf-autotable'
import { UserOptions } from "jspdf-autotable";

declare var jsPDF: any; 
Chart.register(...registerables);


@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [NgIf, NgFor, MenuGralComponent, SpinnerComponent], //DatePipe//chartComponent
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})


export class IngresosComponent implements OnInit{
  ingresos: any[] = [];
  loading = true; //05 11 estaba en false antes del xlsx
  chartLabels: string[];
  chartData: { data: unknown[]; label: string; }[];

  chart: any;
  //constructor(private ingresosService: IngresosService, private datePipe: DatePipe) { }  

  constructor(private ingresosService: IngresosService, private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.ingresosService.getIngresos().subscribe(data => {
      this.ingresos = data;
      this.loading = false;
    });   

    //graficos
    const processedData = this.processData();
    this.createChart(processedData.labels, processedData.values);

  }

  obtenerFechaYHora(timestamp: number) {
    const date = new Date(timestamp);
    const dia = date.toLocaleDateString();
    const hora = date.toLocaleTimeString();
    return { dia, hora };
  }

  // Método para formatear la fecha (dia y hora) usando DatePipe
 /* formatDate(date: any): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm') || ''; // Formato de día y hora
  }*/
  
  volver() {    
    this.router.navigateByUrl('/bienvenido')
  }

  downloadExcel() {
    this.excelService.exportAsExcel(this.ingresos, 'ingresos.');
  }

  //graficos
  processDataForChart() {
    const dataPerDate = this.ingresos.reduce((acc, ingreso) => {
      const fecha = ingreso.fecha;
      acc[fecha] = (acc[fecha] || 0) + 1;
      return acc;
    }, {});
  
    this.chartLabels = Object.keys(dataPerDate);
    this.chartData = [{
      data: Object.values(dataPerDate),
      label: 'Emails por Fecha'
    }];
  }


  //para graficos
   // Procesa los datos para contar ingresos por fecha
   processData() {
    const counts: { [key: string]: number } = {};

    this.ingresos.forEach(ingreso => {
      counts[ingreso.fecha] = (counts[ingreso.fecha] || 0) + 1;
    });

    const labels = Object.keys(counts);
    const values = Object.values(counts);

    return { labels, values };
  }

  // Crea el gráfico usando Chart.js
  createChart(labels: string[], data: number[]) {
    const canvas = document.getElementById('ingresosChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar', // Cambiar a 'line', 'pie', etc., según sea necesario
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Cantidad de Ingresos',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
              text: 'Fechas'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cantidad de Ingresos'
            }
          }
        }
      }
    });
  }
  
  

}