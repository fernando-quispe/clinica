import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ErrorService } from '../../servicios/error.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../clases/usuario';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-login-registrar-admin',
  standalone: true,
  imports: [NgIf, SpinnerComponent, ReactiveFormsModule],
  templateUrl: './login-registrar-admin.component.html',
  styleUrl: './login-registrar-admin.component.css'
})

export class LoginRegistrarAdminComponent implements OnInit {
  registrarForm: FormGroup;
  loading = false;
  suscriptionList: Subscription = new Subscription();
  public obtengoFile!: string; //cambief

  constructor(private fb: FormBuilder,
    private afAuth : AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService,
    private _usuarioService: UsuarioService) {
      this.registrarForm = this.fb.group({
        nombre: ['',[Validators.required,Validators.minLength(4)]],
        apellido: ['',[Validators.required,Validators.minLength(4)]],
        edad: ['',[Validators.required,Validators.minLength(2)]],
        dni: ['',[Validators.required,Validators.minLength(6)]],
        fotoPerfil: ['',[Validators.required]],
        correo: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6)]],
        repetirPassword: ['']
      }, { validator: this.ckeckPassword})
  }

  ngOnInit(): void {
  }

  registrar(){
    this.registrarAdministrador();
    this.router.navigate(['bienvenidoLogin']);
  }

  registrarAdministrador(){
    const datoAdministrador: Usuario = {
      nombre: this.registrarForm.get('nombre')?.value,
      apellido: this.registrarForm.get('apellido')?.value,
      edad: this.registrarForm.get('edad')?.value,
      dni: this.registrarForm.get('dni')?.value,
      obraSocial: null,
      especialidad: null,
      email: this.registrarForm.get('correo')?.value,
      password: this.registrarForm.get('password')?.value,
      perfil: 'Administrador',
      fotoPerfilUno: this.obtengoFile,
      fotoPerfilDos:null,
      aprobadoPorAdmin: null, //false
      baja: null //false
    } 
    try {
      this.loading = true;
      const usuario = this.registrarForm.get('correo')?.value;
      const password = this.registrarForm.get('password')?.value;
      //await this.afAuth.createUserWithEmailAndPassword(usuario,password)
      this.afAuth.createUserWithEmailAndPassword(usuario,password).then(rta =>{
        rta.user?.sendEmailVerification();
        //console.log(this.afAuth);
        if (this.afAuth) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Verifique su Correo Electrónico para autenticar el Alta del Usuario Administrador.',
            showConfirmButton: false,
            timer: 5000
          })
          this.loading = false;
        }
      })
    } catch (error) {
        setTimeout(() =>{
         this.toastr.error(this._errorService.error(error.code),'Error - Administrador');
      }, 6000);
    }
  }

  uploadImage($event){
    const file = $event.target.files[0];
    this.obtengoFile = "assets/admin/"+file.name;
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
}