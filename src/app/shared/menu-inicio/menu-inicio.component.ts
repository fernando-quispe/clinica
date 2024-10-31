import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-inicio.component.html',
  styleUrl: './menu-inicio.component.css'
})

export class MenuInicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}