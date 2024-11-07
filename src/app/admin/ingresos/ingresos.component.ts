import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../servicios/ingresos.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { ExcelService } from '../../servicios/excel.service';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe, MenuGralComponent, SpinnerComponent],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})

export class IngresosComponent implements OnInit{
  ingresos: any[] = [];
  loading = true; //05 11 estaba en false antes del xlsx
  //constructor(private ingresosService: IngresosService, private datePipe: DatePipe) { }

  constructor(private ingresosService: IngresosService, private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.ingresosService.getIngresos().subscribe(data => {
      this.ingresos = data;
      this.loading = false;
    });
  }

  //agregue 04 11
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
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/bienvenido')
  }

  downloadExcel() {
    this.excelService.exportAsExcel(this.ingresos, 'ingresos.');
  }
}