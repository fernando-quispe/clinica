import { Component, OnInit } from '@angular/core';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';

@Component({
  selector: 'app-rechazar-turnos',
  standalone: true,
  imports: [MenuGralComponent],
  templateUrl: './rechazar-turnos.component.html',
  styleUrl: './rechazar-turnos.component.css'
})

export class RechazarTurnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}