import { Injectable } from '@angular/core';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class EspecialistaAutorizadoService {

  user$: Observable<any>;
  suscriptionList: Subscription = new Subscription();
  listUsuario: Usuario[] = [];
  email: string;
  perfilAutorizado: string;
  devuelvoEstado: boolean;

  constructor(public afAuth: AngularFireAuth,
            private afs: AngularFirestore,
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

    let datoUsuario = JSON.parse(localStorage.getItem('autorizadoPerfil'));
    this.perfilAutorizado = datoUsuario;
    console.log('Imprimo perfilAutorizado Leido:', this.perfilAutorizado);
    return this.perfilAutorizado;
  }

  isActualSessionEspecialista(){
    const esperando = this.perfilBuscado();

    console.log('Imprimo perfilAutorizado esperado:', esperando);

    if (esperando === 'SI') {
      console.log('Paso 7 auth Servicio Especialista - perfil  ',this.perfilAutorizado);
      return true;
    }else{
      console.log('Paso 8 auth Servicio Especialista -  NO',this.perfilAutorizado);
      return false;
    }
  }
}