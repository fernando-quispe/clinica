import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ObraSocial } from '../../clases/obra-social';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../servicios/error.service';
import { ObraSocialService } from '../../servicios/obra-social.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { CaptchaService } from '../../servicios/captcha.service';
import { MyValidations } from '../../utils/my-validations';
import { Usuario } from '../../clases/usuario';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-login-registrar-usuario',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, SpinnerComponent, ],
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

  constructor(private fb: FormBuilder,
    private afAuth : AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService,
    private _obrasocialService: ObraSocialService,
    private _usuarioService: UsuarioService,
    private _captcha: CaptchaService) {

      this.captchaGenerado = this._captcha.pickearPalabraRandom();
                console.log(this.captchaGenerado);

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
        captcha:['',[Validators.required,MyValidations.isCaptchaWithParam(this.captchaGenerado)]],
      }, { validator: this.ckeckPassword})
  }

  ngOnInit(): void {
    this.getObrasocial();
  }

  registrar(){
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
}