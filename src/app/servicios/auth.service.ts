import { Injectable } from '@angular/core';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Perfil } from '../interfaces/perfil';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

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

  /*async enviandoVerificacionEmail(): Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }*/

  //lo agregue fdq  
  /*async enviandoVerificacionEmail(): Promise<void> {
    const user = await this.afAuth.currentUser; // Use await here
      if (user) {
        await user.sendEmailVerification(); // Use await here
      } else {
        // Handle case where there's no current user (optional)
      }
  }*/

  async enviandoVerificacionEmail(): Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  /*async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }*/

  //cambiadofdq
  /*async sendVerificationEmail(): Promise<void> {
    try {
      const user = await this.afAuth.currentUser; // Use await here
      if (user) {
        await user.sendEmailVerification();
        console.log('Email verification link sent successfully!'); // Success message
      } else {
        console.error('No current user found. Cannot send verification email.'); // Error handling
      }
    } catch (error) {
      console.error('Error sending verification email:', error); // Handle other errors
    }
  }*/

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string): Promise<User | null> { //agregue null
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
      return null; // O un valor predeterminado , lo agregue
    }
  }
  
  async register(email: string, password: string): Promise<User | null> { //agregue null
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
      return null; // O un valor predeterminado , lo agregue
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      /* emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'ADMIN', */
    };
    return userRef.set(data, { merge: true });
  }

  perfilBuscado():string {

    let datoUsuario = JSON.parse(localStorage.getItem('userPerfil'));
    this.perfil = datoUsuario;
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

  isActualSessionAdministrador(){
    const esperando = this.getPerfil(); //this.perfilBuscado();
    console.log('Imprimo Perfil auth esperado:', esperando);

    if (esperando === 'Administrador') {
      console.log('Paso 7 auth Servicio auth - perfil  ',this.perfil);
      return true;
    }else{
      console.log('Paso 8 auth Servicio auth -  NO',this.perfil);
      return false;
    }
  }
}