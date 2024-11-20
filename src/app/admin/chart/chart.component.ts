import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgIf],
  templateUrl: './chart.component.html',
  template: '<canvas #chart></canvas>',
  styleUrl: './chart.component.css'
})

export class ChartComponent implements OnInit {
  @Input() chartLabels: string[] = [];
  @Input() chartData: any[] = [];
loading: any;
ingresos: any;

  ngOnInit() {
    const ctx = document.getElementById('chart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar', // Change type for different charts
      data: {
        labels: this.chartLabels,
        datasets: this.chartData
      },
      options: {
        // Customize chart options here
      }
    });
  }
}