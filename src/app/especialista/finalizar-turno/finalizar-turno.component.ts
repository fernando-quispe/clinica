import { Component, OnInit } from '@angular/core';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';

@Component({
  selector: 'app-finalizar-turno',
  standalone: true,
  imports: [MenuGralComponent],
  templateUrl: './finalizar-turno.component.html',
  styleUrl: './finalizar-turno.component.css'
})

export class FinalizarTurnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}