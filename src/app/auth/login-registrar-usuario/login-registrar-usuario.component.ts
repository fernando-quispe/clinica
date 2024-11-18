import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ObraSocial } from '../../clases/obra-social';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../servicios/error.service';
import { ObraSocialService } from '../../servicios/obra-social.service';
import { UsuarioService } from '../../servicios/usuario.service';
//1import { CaptchaService } from '../../servicios/captcha.service';
import { MyValidations } from '../../utils/my-validations';
import { Usuario } from '../../clases/usuario';
import Swal from 'sweetalert2';
import { CommonModule, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
//2import { CaptchaDirective } from '../../directivas/captcha.directive';
//3import { Captchav3Component } from '../../captchav3/captchav3.component';
//4import { RecaptchaComponent, RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import { CaptchamioDirective } from '../../directivas/captchamio.directive';

@Component({
  selector: 'app-login-registrar-usuario',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, SpinnerComponent, CommonModule, CaptchamioDirective],
  templateUrl: './login-registrar-usuario.component.html',
  styleUrl: './login-registrar-usuario.component.css'
})

export class LoginRegistrarUsuarioComponent implements OnInit {
  registrarForm: FormGroup;
  loading = false;
  suscriptionList: Subscription = new Subscription();
  listObrasocial: ObraSocial[] = [];
  public obtengoFile: string;
  public obtengoFile2: string;
  public gabrarSegundaParte = false;
  captchaGenerado: string;
  //new 0711
  userCaptchaAnswer: number | null = null; // Almacena la respuesta del usuario
  captchaPassed: number | null = null; // Indica si el CAPTCHA fue resuelto
  //captchaPassed: boolean = false;
  correctAnswer: number = 0; // Respuesta correcta de la directiva
  //1611 recaptchaService: any; 
  //5recaptchaService = inject(ReCaptchaV3Service);
  //1611
  captchaResolved = false;
  //1711
  captchaValidated: boolean | null = null; // Estado de validación del captcha

  constructor(
    private fb: FormBuilder,
    private afAuth : AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService,
    private _obrasocialService: ObraSocialService,
    private _usuarioService: UsuarioService,
    ) {
      this.registrarForm = this.fb.group({
        nombre: ['',[Validators.required,Validators.minLength(4), this.validarLetra]],
        apellido: ['',[Validators.required,Validators.minLength(4), this.validarLetra]],
        edad: ['',[Validators.required,Validators.minLength(2)]],
        dni: ['',[Validators.required,Validators.min(7), Validators.max(8)]],
        obrasocial: ['',[Validators.required]],
        fotoPerfil: ['no la guardo aun',[Validators.required]],
        fotoPerfil2: ['no la guardo aun',[Validators.required]],
        correo: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6)]],
        repetirPassword: [''],
        //original captcha: ['', Validators.required] 
        captcha: ['', [Validators.required, this.captchaValidator.bind(this)]], // Agrega validación 1711
      }, { validator: this.ckeckPassword})
  } 

  ngOnInit(): void {
    this.getObrasocial();
    //1711
    /*this.registrarForm = this.fb.group({
      captcha: [null, Validators.required] // Campo captcha con validación requerida
    });*/
  }

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
    this.registrarPaciente();
    console.log('grabrarSegundaParte3 ');
    this.router.navigate(['auth/login']);
  }

  async registrarPaciente(){
    const datoUsuario: Usuario = {
      nombre: this.registrarForm.get('nombre')?.value,
      apellido: this.registrarForm.get('apellido')?.value,
      edad: this.registrarForm.get('edad')?.value,
      dni: this.registrarForm.get('dni')?.value,
      obraSocial: this.registrarForm.get('obrasocial')?.value,
      especialidad: null,
      email: this.registrarForm.get('correo')?.value,
      password: this.registrarForm.get('password')?.value,
      perfil: 'Paciente',
      fotoPerfilUno: this.obtengoFile,
      fotoPerfilDos: this.obtengoFile2,
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
    console.log('estamos en registrar usuario paciente:', datoUsuario.email);
    try {
      this.loading = true;
      const usuario = this.registrarForm.get('correo')?.value;
      const password = this.registrarForm.get('password')?.value;
      await this.afAuth.createUserWithEmailAndPassword(usuario,password);
      await (await this.afAuth.currentUser).sendEmailVerification();
      console.log(this.afAuth);
      if (this.afAuth) {
        this._usuarioService.crearUsuario(datoUsuario);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El Paciente fue registrado con éxito!',
          showConfirmButton: false,
          timer: 5000
        })
        this.loading = false;
      }
    } catch (error) {
        this.toastr.error(this._errorService.error(error.code),'Error - Paciente');
        setTimeout(() =>{
          this.toastr.error(this._errorService.error(error.code),'Error - Paciente');
      }, 6000);
    }
  }

  getObrasocial(){
    this.loading = true;
    this.suscriptionList == this._obrasocialService.getListadoObraSocial().subscribe(data =>{
      //console.log(data);
      this.listObrasocial = [];

      data.forEach((element:any) => {
        this.listObrasocial.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        this.loading = false;
        //console.log('Lista id',element.payload.doc.id);
        //console.log('Lista data',element.payload.doc.data());
      });
      console.log('Lista Obrasocial',this.listObrasocial);
    })
  }

  registrarObraSocial(){
    console.log('Probando Registrar Obrasocial');
    //this.loading = true;
    const datoGrabar: ObraSocial = {
      //nombre: this.registrarForm.get('nombre')?.value
      nombre: "OSDE"
    }
    this._obrasocialService.crearObraSocial(datoGrabar).then(resp => {
      //this.showSuccess();
      this.toastr.success('La Obra Social fue registrada con éxito!', 'Obra Social registrada!');
    }).catch((error) => {
      //this.showError(error);
      this.toastr.error(this._errorService.error(error.code),'Error Obra Social');
    });
    //this.rutas.navigate(['actores/listadoActores']);
  }

  uploadImage($event){
    const file = $event.target.files[0];
    this.obtengoFile = "assets/paciente/"+file.name;
  }

  uploadImage2($event){ 
    const file = $event.target.files[0];
    this.obtengoFile2 = "assets/paciente/"+file.name;
  }

  ckeckPassword(group: FormGroup): any {
    const pass = group.controls['password']?.value; //cambief
    const confirmarPassword = group.controls['repetirPassword']?.value;
    return pass === confirmarPassword ? null : { notSame: true }
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

  //version3
  /*6executeRecaptcha(){
    this.recaptchaService.execute('').subscribe((token)=> {
      console.log(token)
    } )
  }*/

  //version2
  /*1711
  executeRecaptchaVisible(token:any){
    console.log(token);
  }    */
  
  /*onCaptchaResolved(response: string): void {
    if (response) {
      console.log('Captcha resuelto con respuesta:', response);
      this.captchaResolved = true;
    } else {
      this.captchaResolved = false;
    }
  }*/

     //1711
  /*onCaptchaValidation(isValid: boolean): void {
    this.captchaValidated = isValid;
  }*/

  //1711 ultimo
  /*onCaptchaValidation(isValid: boolean): void {
    this.captchaValidated = isValid;
    this.registrarForm.get('captcha')?.setValue(isValid);
  }*/

  /*onCaptchaValidation(isValid: boolean): void { **lo saque ulitmo
    // Marca el captcha como válido o inválido
    this.captchaValidated = isValid;
   
    // Si el captcha es válido, marca el control como válido, si no, marca el error
    if (isValid) {
      this.registrarForm.get('captcha')?.setErrors(null); // Elimina errores
    } else {
      this.registrarForm.get('captcha')?.setErrors({ isCaptchaWithParam: true });
    }
  }*/

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


  /*captchaValidator(control: any): { [key: string]: boolean } | null {
    // Aquí puedes agregar la validación personalizada si es necesario
    if (!this.captchaValidated) {
      return { isCaptchaWithParam: true }; // Error si no ha sido validado correctamente
    }
    return null;
  }*/

     // Validador del captcha baja 1711
  /*captchaValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!this.captchaValidated) {
      return { isCaptchaWithParam: true };  // Si el captcha no es válido, retorna un error
    }
    return null;  // Si es válido, no hay error
  }*/

  captchaValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (this.captchaValidated === null || !this.captchaValidated) {
      return { isCaptchaWithParam: true };  // Si no se ha validado, marcar como error
    }
    return null;  // Si el captcha es válido, no hay error
  }
    

/*
  get captcha() {
    return this.registrarForm.get('captcha');
  }*/
}