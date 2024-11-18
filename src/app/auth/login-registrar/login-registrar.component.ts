import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Especialidad } from '../../clases/especialidad';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../servicios/error.service';
import { EspecialidadService } from '../../servicios/especialidad.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { CaptchaService } from '../../servicios/captcha.service';
import { MyValidations } from '../../utils/my-validations';
import { Usuario } from '../../clases/usuario';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { RecaptchaComponent, RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import { Captchav3Component } from '../../captchav3/captchav3.component';
import { CaptchamioDirective } from '../../directivas/captchamio.directive';

@Component({
  selector: 'app-login-registrar',
  standalone: true,
  imports: [NgIf, SpinnerComponent, ReactiveFormsModule, RecaptchaModule, CaptchamioDirective],
  templateUrl: './login-registrar.component.html',
  styleUrl: './login-registrar.component.css'
})

export class LoginRegistrarComponent implements OnInit {
  registrarForm: FormGroup;
  loading = false;
  suscriptionList: Subscription = new Subscription();
  listEspecialidad: Especialidad[] = [];
  public obtengoFile: string;
  captchaGenerado: string;  
  //new 0711
  userCaptchaAnswer: number | null = null; // Almacena la respuesta del usuario
  captchaPassed: number | null = null; // Indica si el CAPTCHA fue resuelto
  //captchaPassed: boolean = false;
  correctAnswer: number = 0; // Respuesta correcta de la directiva
  recaptchaService: any; 
  // 1611 recaptchaService = inject(ReCaptchaV3Service);
  //1711
  captchaValidated: boolean | null = null; // Estado de validación del captcha
  //1611
  captchaResolved = false;

  constructor(private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private router: Router,
              private toastr: ToastrService,
              private _errorService: ErrorService,
              private _especialidadService: EspecialidadService,
              private _usuarioService: UsuarioService)
              //private _captcha: CaptchaService) 1611
              {
                //this.captchaGenerado = this._captcha.pickearPalabraRandom();1611
                //console.log(this.captchaGenerado);1611
                this.registrarForm = this.fb.group({
                  nombre: ['',[Validators.required,Validators.minLength(4), this.validarLetra]],
                  apellido: ['',[Validators.required,Validators.minLength(4), this.validarLetra]],
                  edad: ['',[Validators.required,Validators.minLength(2)]],
                  dni: ['',[Validators.required,Validators.minLength(7), Validators.maxLength(8)]],
                  especialidad: ['',[Validators.required, this.validarLetra]],
                  otraEspecialidad:[''],
                  fotoPerfil: ['',[Validators.required]],
                  correo: ['',[Validators.required, Validators.email]],
                  password: ['',[Validators.required, Validators.minLength(6)]],
                  repetirPassword: [''],                 
                  //captcha: ['', Validators.required]
                  captcha: ['', [Validators.required, this.captchaValidator.bind(this)]], // Agrega validación 1711
                }, { validator: this.ckeckPassword })
  }

  ngOnInit(): void {
    this.getEspecialidad();   
  }

  // Método para manejar la validación del captcha
  onCaptchaValidation(isValid: boolean): void {
    this.captchaValidated = isValid;  // Establece el estado del captcha
    const captchaControl = this.registrarForm.get('captcha');
  
    if (isValid) {
      captchaControl?.setValue('valid');  // Establece un valor "valid" cuando el captcha es válido
      captchaControl?.setErrors(null);  // Elimina cualquier error anterior
    } else {
      captchaControl?.setValue('');  // Si el captcha es inválido, restablece el valor
      captchaControl?.setErrors({ isCaptchaWithParam: true });  // Marca el campo como inválido
    }
  }

  captchaValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (this.captchaValidated === null || !this.captchaValidated) {
      return { isCaptchaWithParam: true };  // Si no se ha validado, marcar como error
    }
    return null;  // Si el captcha es válido, no hay error
  }

  /* validateCaptch() {
    const captch = this.captchaGenerado;
    const confirmarCaptch = this.registrarForm.controls.captcha?.value;
    if (captch === confirmarCaptch) {
      return null;
    } else {
      return true;
    }
    //return captch === confirmarCaptch ? null : { notSame: true }
  } */
  
  // Método para manejar la respuesta de reCAPTCHA lo saque 1611
  onCaptchaResolved(captchaResponse: string | null): void {
    this.registrarForm.patchValue({
      captcha: captchaResponse
    });
}
  // Método de registro lo saque 16 11
  async registrar(){
    if (!this.registrarForm.get('captcha')?.value) {
      console.log('grabrar no paso el captcha '); //se queda aca
      this.toastr.error('Debe completar el reCAPTCHA antes de continuar', 'Error');
      return;
    }    
    console.log('grabrarSegundaParte0 ');
    this.registrarEspecialista();
    console.log('grabrarSegundaParte3 ');
    this.router.navigate(['auth/login']);
  }

  /* lo saque 1611
  registrar(){
    this.registrarEspecialista();
    this.router.navigate(['auth/login']);
  }*/

  async registrarEspecialista(){
     const datoEspecialista: Usuario = {
       nombre: this.registrarForm.get('nombre')?.value,
       apellido: this.registrarForm.get('apellido')?.value,
       edad: this.registrarForm.get('edad')?.value,
       dni: this.registrarForm.get('dni')?.value,
       obraSocial: null,
       especialidad: this.registrarForm.get('especialidad')?.value,
       otraEspecialidad: this.registrarForm.get('otraEspecialidad')?.value,
       email: this.registrarForm.get('correo')?.value,
       password: this.registrarForm.get('password')?.value,
       perfil: 'Especialista',
       fotoPerfilUno: this.obtengoFile,
       fotoPerfilDos:null,
       aprobadoPorAdmin: 'NO',
       baja: 'NO',
       altura:'',
       peso:'',
       temperatura:'',
       presion:'',
       clave1:'',
       valor1:'',
       clave2:'',
       valor2:'',
       clave3:'',
       valor3:''
     }
     //console.log('estamos en registrar usuario paciente:', datoEspecialista.email);
     try {
       this.loading = true;
       const usuario = this.registrarForm.get('correo')?.value;
       const password = this.registrarForm.get('password')?.value;
       //await this.afAuth.createUserWithEmailAndPassword(usuario,password)
       this.afAuth.createUserWithEmailAndPassword(usuario,password).then(rta =>{
         rta.user?.sendEmailVerification();
         //console.log(this.afAuth);
         if (this.afAuth) {
           this._usuarioService.crearUsuario(datoEspecialista);
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Verifique su correo electrónico para autenticar el Alta del Usuario Especialista.',
             showConfirmButton: false,
             timer: 5000
           })
           this.registrarEspecialidad();
           this.loading = false;
         }
       })
     } catch (error) {
         setTimeout(function() {
          this.toastr.error(this._errorService.error(error.code),'Error - Especialista');
       }, 6000);
     }
  }

  /*setTimeout(() =>{
          this.toastr.error(this._errorService.error(error.code),'Error - Especialista');
       }, 6000); lo saque*/

  registrarEspecialidad(){
    console.log('Registrar especialidad.');
    const ver:string = this.registrarForm.get('especialidad')?.value;
    const found = this.listEspecialidad.find((obj) => {
      return obj.nombre === ver;
    });
    //console.log('Ver el valor ver',ver);
    //console.log('Ver el valor found',found);
    if (found === undefined) {
        console.log("Valor No encontrado");
        const datoGrabar: Especialidad = {
          nombre:  ver,
          foto:'assets/especialidades/especialidades.png'
        }
        this._especialidadService.crearEspecialidad(datoGrabar).then(resp => {
          this.toastr.success('La Especialidad fue registrada con éxito!', 'Especialidad registrada!');
        }).catch((error) => {
          this.toastr.error(this._errorService.error(error.code),'Error');
        });
    }else{
        console.log("Valor Existe");
    }
  }

  getEspecialidad(){
    this.suscriptionList == this._especialidadService.getListadoEspecialidad().subscribe(data =>{
      //console.log(data);
      this.listEspecialidad = [];
      data.forEach((element:any) => {
        this.listEspecialidad.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        this.loading = false;
        //console.log('Lista id',element.payload.doc.id);
        //console.log('Lista data',element.payload.doc.data());
      });
    })
  }

  uploadImage($event){
    const file = $event.target.files[0];
    //this.obtengoFile = "assets/especialistas/"+file.name;
    this.obtengoFile = "assets/especialidades/"+file.name;
  }

  ckeckPassword(group: FormGroup): any {
    const pass = group.controls['password']?.value; //cambief
    const confirmarPassword = group.controls['repetirPassword']?.value;//cambief
    return pass === confirmarPassword ? null : { notSame: true };
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
  }

  validarLetra(control: AbstractControl): object | null {
    const letra = control.value;
    const soloLetras = /^[a-zA-Z]+$/;
    if (!soloLetras.test(letra)) {
      return { soloLetras: true };
    }
    return null;
  }

  volver() {
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/auth/login')
  }

  //1611
  executeRecaptcha(){
    this.recaptchaService.execute('').subscribe((token)=> {
      console.log(token)
    } )
  }

  executeRecaptchaVisible(token:any){
    console.log(token);
  } 
}