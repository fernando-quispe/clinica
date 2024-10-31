import { Injectable } from '@angular/core';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../interfaces/user';
import { Perfil } from '../interfaces/perfil';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})

export class EspecialistaService {

  user$: Observable<any>;
  suscriptionList: Subscription = new Subscription();
  listUsuario: Usuario[] = [];
  email: string;
  perfil: string;
  devuelvoEstado: boolean;
  listPerfil: Perfil[] = [];
  gralPerfil:string;

  constructor(public afAuth: AngularFireAuth,
            private afs: AngularFirestore,
            private unUsuario: UsuarioService,
            ) {
              this.user$ = this.afAuth.authState.pipe(
                switchMap((user) => {
                  if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                  }
                  return of(null);
                })
              );
  }

  perfilBuscado():string {
    let datoUsuario = JSON.parse(localStorage.getItem('perfil'));
    this.perfil = datoUsuario.perfil;
    console.log('Imprimo Perfil Leido:', this.perfil);
    return this.perfil;
  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    this.email =  datoUsuario.email;
    console.log('Service Paciente correo: ',this.email );
  }

  getPerfil():string{
    this.obtener_localstorage();
    console.log('correo :', this.email);
    this.unUsuario.getPerfilUsuario(this.email).subscribe(data => {
         data.forEach((element:any) => {
          this.listPerfil.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        })
        //console.log('Gral Perfil - Tipo ',this.listPerfil[0].perfil);
        const usuarioPerfil: Perfil = {
          perfil: this.listPerfil[0].perfil,
          apellido: this.listPerfil[0].apellido,
          nombre: this.listPerfil[0].nombre,
          dni: this.listPerfil[0].dni,
          email: this.listPerfil[0].email,
          aprobadoPorAdmin:this.listPerfil[0].aprobadoPorAdmin,
          especialidad:this.listPerfil[0].especialidad,
          otraEspecialidad:this.listPerfil[0].otraEspecialidad,
          fotoPerfilUno:this.listPerfil[0].fotoPerfilUno,
          fotoPerfilDos:this.listPerfil[0].fotoPerfilDos
        };
        this.gralPerfil = usuarioPerfil.perfil;
        //console.log('Gral Perfil - var ',this.listPerfil[0].perfil);
      });
    return this.gralPerfil;
  }

  isActualSessionEspecialista(){
    const esperando = this.getPerfil(); //this.perfilBuscado();
    console.log('Imprimo Perfil esperado:', esperando);

    if (esperando === 'Especialista') {
      console.log('Paso 7 auth Servicio Especialista - perfil  ',this.perfil);
      return true;
    }else{
      console.log('Paso 8 auth Servicio Especialista -  NO',this.perfil);
      return false;
    }
  }
}