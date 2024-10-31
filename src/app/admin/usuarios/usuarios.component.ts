import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Excel } from '../../clases/excel';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { ExcelExportService } from '../../servicios/excel-export.service';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent, NgIf, NgFor],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})

export class UsuariosComponent implements OnInit {

  public listaUsuarioPaciente: Usuario[] = [];
  public listaUsuarioPacienteExcel: Excel[] = [];
  suscriptionList: Subscription = new Subscription();
  loading = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _usuarioService:UsuarioService,
              public srvExcel:ExcelExportService) { 
  }

  ngOnInit(): void {
    this.getList();
  }

  ngOnDestroy(): void {
    this.suscriptionList.unsubscribe();
  }

  getList() {
      this.suscriptionList == this._usuarioService.getListadoUsuario().subscribe(data =>{
        console.log('Usuario Adm ',data);
        this.listaUsuarioPaciente = [];
        data.forEach((element:any) => {
          this.listaUsuarioPaciente.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          })

          /* console.log('Usuario Adm id',element.payload.doc.id);
          console.log('Usuario Adm data ',element.payload.doc.data());
          console.log('Usuario Adm Lista Pacientes',this.listaUsuarioPaciente); */

          //Filtramos los Paciente
          this.listaUsuarioPaciente = this.listaUsuarioPaciente.filter((obj) => {
            return obj.perfil === "Paciente";
          });
        });
        //console.log('Usuario Adm Lista Pacientes',this.listaUsuarioPaciente);
      })
  }

  habilitarCuenta(item: any) {
      //this.lista = [];
      this._usuarioService.habilitarCuenta(item.id).then((res) => {});
  }

  deshabilitarCuenta(item: any) {
      //this.lista = [];
      this._usuarioService.deshabilitarCuenta(item.id).then((res) => {});
  }

  seleccionar(item: Usuario) {
      //this.seleccionado.emit(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
      // no hay dato que se modifique
  }

  public async exportexcel() {

    for (let i = 0; i < this.listaUsuarioPaciente.length; i++) {
      console.log(' Elemt ', this.listaUsuarioPaciente[i]);
      const excelDato:Excel={
        apellido : this.listaUsuarioPaciente[i].apellido,
        nombre : this.listaUsuarioPaciente[i].nombre,
        dni : this.listaUsuarioPaciente[i].dni,
        edad : this.listaUsuarioPaciente[i].edad,
        obraSocial : this.listaUsuarioPaciente[i].obraSocial,
        altura : this.listaUsuarioPaciente[i].altura,
        peso : this.listaUsuarioPaciente[i].peso,
        presion : this.listaUsuarioPaciente[i].presion,
        temperatura : this.listaUsuarioPaciente[i].temperatura,
        clave1 : this.listaUsuarioPaciente[i].clave1,
        valor1 : this.listaUsuarioPaciente[i].valor1,
        clave2 : this.listaUsuarioPaciente[i].clave2,
        valor2 : this.listaUsuarioPaciente[i].valor2,
        clave3 : this.listaUsuarioPaciente[i].clave3,
        valor3 : this.listaUsuarioPaciente[i].valor3,
        perfil : this.listaUsuarioPaciente[i].perfil
      }
      this.listaUsuarioPacienteExcel.push(excelDato);
    }

    let arrayUsuarios = this.listaUsuarioPacienteExcel;

    this.srvExcel.exportar_ArrayObjetos_toExcel(arrayUsuarios,"Usuarios-Pacientes","Hoja 1");
  }

  volver() {
    //localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/bienvenido')
  }
}