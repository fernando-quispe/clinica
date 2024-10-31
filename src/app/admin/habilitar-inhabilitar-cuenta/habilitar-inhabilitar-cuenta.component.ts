import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-habilitar-inhabilitar-cuenta',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent, NgIf, NgFor],
  templateUrl: './habilitar-inhabilitar-cuenta.component.html',
  styleUrl: './habilitar-inhabilitar-cuenta.component.css'
})

export class HabilitarInhabilitarCuentaComponent implements OnInit, OnDestroy{
  public listaUsuarioEspecialista: Usuario[] = [];
  suscriptionList: Subscription = new Subscription();
  loading = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _usuarioService:UsuarioService) { 
  }

  ngOnInit(): void {
    this.getList();
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
  }

  getList() {
    this.suscriptionList == this._usuarioService.getListadoUsuario().subscribe(data =>{
      //console.log(data);
      this.listaUsuarioEspecialista = [];
      data.forEach((element:any) => {
        this.listaUsuarioEspecialista.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })

        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        //console.log("Lista ",this.listaUsuarioEspecialista);

        });
        //Filtramos los Especialistas
        this.listaUsuarioEspecialista = this.listaUsuarioEspecialista.filter((obj) => {
          return obj.perfil === "Especialista";
        //console.log("Especialistas Found ", this.listaUsuarioEspecialista);
      });
    })
  }

  habilitarCuenta(item: any) {
    this._usuarioService.habilitarCuenta(item.id).then((res) => {});
  }

  deshabilitarCuenta(item: any) {
    this._usuarioService.deshabilitarCuenta(item.id).then((res) => {});
  }

  seleccionar(item: Usuario) {
    //this.seleccionado.emit(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // no hay dato que se modifique
  }

  volver() {
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/bienvenido')
  }
}