import { Component, OnInit } from '@angular/core';
import { Log, LogService } from '../../servicios/log.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CustomDatePipe } from '../../shared/pipes/custom-date.pipe';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-report',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, CustomDatePipe, SpinnerComponent, MenuGralComponent],
  templateUrl: './log-report.component.html',
  styleUrl: './log-report.component.css'
})

export class LogReportComponent implements OnInit {
  logs: Log[] = [];
  loading = false;
  
  constructor(private logService: LogService, private router: Router) {}

  ngOnInit(): void {
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
    });
  }

  volver() {
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/bienvenido')
  }
}