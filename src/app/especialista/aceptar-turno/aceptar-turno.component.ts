import { Component, OnInit } from '@angular/core';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';

@Component({
  selector: 'app-aceptar-turno',
  standalone: true,
  imports: [MenuGralComponent],
  templateUrl: './aceptar-turno.component.html',
  styleUrl: './aceptar-turno.component.css'
})
export class AceptarTurnoComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }
}