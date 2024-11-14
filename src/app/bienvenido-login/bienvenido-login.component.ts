import { Component, OnInit } from '@angular/core';
import { Github } from '../clases/github';
import { GithubService } from '../servicios/github.service';
import { MenuInicioComponent } from '../shared/menu-inicio/menu-inicio.component';


@Component({
  selector: 'app-bienvenido-login',
  standalone: true,
  imports: [MenuInicioComponent],
  templateUrl: './bienvenido-login.component.html',
  styleUrl: './bienvenido-login.component.css'
  
})

export class BienvenidoLoginComponent implements OnInit {
  //user!: Github;

  //constructor(private _githubService:GithubService) { }

  constructor(){}

  ngOnInit(): void {
   //this._githubService.getUser().subscribe(user => this.user = user); 
  }
}