import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Usuario } from '../../clases/usuario';
import { Perfil } from '../../interfaces/perfil';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ErrorService } from '../../servicios/error.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../../servicios/auth.service';
import { LogService } from '../../servicios/log.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { EspecialidadService } from '../../servicios/especialidad.service';
import { EspecialistaService } from '../../servicios/especialista.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SpinnerComponent, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    trigger('enterState',[
      state('void',style({
        transform: 'translateX(100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(500,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]    
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  muestroCorreo: string;
  muestroClave: string;
  suscriptionList: Subscription = new Subscription();
  suscription: Subscription = new Subscription();
  listUsuario: Usuario[] = [];
  listPerfil: Perfil[] = [];
  email: string;
  perfil: string;
  perfil2: string;
  //agregue
  password: string;

  constructor(private rutas:Router,
              private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private _errorService: ErrorService,
              private toastr: ToastrService,
              private unUsuario: UsuarioService,
              private af: AngularFirestore,

              private authService: AuthService,
              private logService: LogService
  ){
    this.loginForm = this.fb.group({
      usuarioCorreo: ['',[Validators.required,Validators.email]],
      usuarioClave: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(userId: string) {
    this.authService.login(userId, this.email).then(() => {
      //this.logService.logUserAccess(userId, 'Ingreso al sistema');
      this.logService.logUserAccess(userId);
    });
  }

  /* automaticoLogin(){
    this.loginForm.controls['usuarioCorreo'].setValue('danny@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('123456');
  } */

  administradorLogin(){
    this.loginForm.controls['usuarioCorreo'].setValue('admin@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('123456');
  }

  loginSiguiente(){
      console.log('Entramos en loginSiguiente ',this.loginForm)
      const usuario = this.loginForm.get('usuarioCorreo')?.value;
      const password = this.loginForm.get('usuarioClave')?.value;

      //0511
      const fechaActual = new Date();
      const fecha = fechaActual.toLocaleDateString(); // Ejemplo: '01/01/2024'
      const hora = fechaActual.toLocaleTimeString();  // Ejemplo: '10:30:15 AM'
      
      this.loading = true;
      setTimeout(() => {
        console.log('Tiempo');
      }, 500000);
      
      this.afAuth.signInWithEmailAndPassword(usuario,password).then((respuesta) => {
        console.log("Respuesta ",respuesta);
       //inicio 03 10
        // Obtenemos la fecha y hora del ingreso
   /*0511 const ingresoData = {
      email: usuario,
      timestamp: new Date(),
      uid: respuesta.user?.uid
    };*/
      
    //0511
    const ingresoData = {
      email: usuario,
      fecha: fecha,
      hora: hora
    };

    // Guardamos el ingreso en Firestore
    this.af.collection('ingresos').add(ingresoData)
      .then(() => {
        console.log('Ingreso guardado en Firestore');
      })
      .catch(error => {
        console.error('Error al guardar ingreso en Firestore: ', error);
      });
      //fin
        if (respuesta.user?.emailVerified === false) {
          this.loading = false;
          this.rutas.navigate(['/auth/verificarCorreo']);
        } else {
          console.log('Grabando Local Storage');
          this.loading = false;
          this.perfil = '';
          this.setLocalStorage(respuesta.user);
          this.setLocalStoragePerfil();
          this.rutas.navigate(['/bienvenido']);
          //agregue  03 10
          //this.logService.logUserAccess(this.authService.email);
          //agregue 03 10
         //this.logLogin(this.email);
           //agregue 03 10 
         //let fecha=new Date();
          //this.af.collection('ingresos').add({
          //  email: this.email,
          //  fechaacceso:  fecha.getDate() + '-' + (fecha.getMonth()+1) +  '-' +fecha.getFullYear(),
          //  dato: 'Ingreso al sistema'
          //})

        }
      }, error => {
        this.loading = false;
        this.toastr.error(this._errorService.error(error.code),'Error')
        this.loginForm.reset();
    })
  }

  /*logLogin(email: any) {
    throw new Error('Method not implemented.');
  }*/

  //agregue 
  private logLogin(email: string) {
    this.af.collection('ingresos').add({
      email: email,
      timestamp: new Date()
    });
  }
  setLocalStorage(user: any){
    const usuario: User = {
      uid: user.uid,
      email: user.email,
    };
    localStorage.setItem('user', JSON.stringify(usuario));
    this.email = user.email;
  }

  getPerfil(correo:string){
    console.log('correo :', correo);
    this.unUsuario.getPerfilUsuario(correo).subscribe(data => {
         data.forEach((element:any) => {
          this.listPerfil.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
         console.log(element.payload.doc.id);
         console.log(element.payload.doc.data());
       });
       console.log('Lista Perfil ',this.listPerfil);
       console.log('Lista Perfil - Tipo ',this.listPerfil[0].perfil);
       console.log('Lista Perfil -  Autorizado ',this.listPerfil[0].aprobadoPorAdmin);
       //Grabando localStorage Perfil - autorizado - especialidades
       localStorage.setItem('userPerfil', JSON.stringify(this.listPerfil[0].perfil));
       localStorage.setItem('autorizadoPerfil', JSON.stringify(this.listPerfil[0].aprobadoPorAdmin));
       //localStorage.setItem('especialaidad', JSON.stringify(this.listPerfil[0].especialidad));
       //localStorage.setItem('especialaidadOtra', JSON.stringify(this.listPerfil[0].otraEspecialidad));
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
        localStorage.setItem('perfil', JSON.stringify(usuarioPerfil));
      });
  }

  setLocalStoragePerfil(){
    console.log('Paso 1 Leyendo local storag');
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    this.email = datoUsuario.email;
    console.log('Paso 2 Imprimo email ',this.email);
    console.log('Paso 3 Grabando Perfil');
    this.getPerfil(this.email);
  }

  onAdmin1(){
    this.loginForm.controls['usuarioCorreo'].setValue('fernando.utn@hotmail.com');
    this.loginForm.controls['usuarioClave'].setValue('123456');
  }

  onEspecialista1(){
    this.loginForm.controls['usuarioCorreo'].setValue('moni.lili.ortegoza@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('123456');
  }

  onEspecialista2(){
    this.loginForm.controls['usuarioCorreo'].setValue('analistadetesting@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('123456');
  }

  onPaciente1(){
    this.loginForm.controls['usuarioCorreo'].setValue('santosquispe1950@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('123456');
  }

  onPaciente2(){
    this.loginForm.controls['usuarioCorreo'].setValue('lourdesriveramartinez1954@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('123456');
  }

  onPaciente3(){
    this.loginForm.controls['usuarioCorreo'].setValue('rifyesilte@gufum.com');
    this.loginForm.controls['usuarioClave'].setValue('123456');
  }

  registrarse(){    
    this.rutas.navigate(['auth/MenuRegistrar']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // no hay dato que se modifique
  }
}