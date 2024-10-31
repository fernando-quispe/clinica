import { Component, OnInit } from '@angular/core';
import { Github } from '../clases/github';
import { GithubService } from '../servicios/github.service';
import { NgIf } from '@angular/common';
import { MenuGralComponent } from '../shared/menu-gral/menu-gral.component';
import { GithubComponent } from '../shared/github/github.component';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [NgIf, MenuGralComponent, GithubComponent],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})

export class BienvenidoComponent implements OnInit {
 //lo saque user!: Github;
  constructor() { }
  /*constructor(private _githubService:GithubService,
               ) { }*/

  ngOnInit(): void {
    //this._githubService.getUser().subscribe(user => this.user = user);     
  }
}