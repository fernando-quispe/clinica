import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-correo',
  standalone: true,
  imports: [],
  templateUrl: './verificar-correo.component.html',
  styleUrl: './verificar-correo.component.css'
})

export class VerificarCorreoComponent implements OnInit {  

  constructor(private rutas: Router) { }

  ngOnInit(): void {  }

  volverInicio(){
    console.log('Verificar correo');
    this.rutas.navigate(['bienvenidoLogin']);
  }
}