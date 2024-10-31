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
import { FormGroup } from '@angular/forms';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { DetalleTurnoEspComponent } from '../detalle-turno-esp/detalle-turno-esp.component';
import { DetalleResenaEspComponent } from '../detalle-resena-esp/detalle-resena-esp.component';
import { TurnoPaciente } from '../../clases/turno-paciente';
import { PacienteService } from '../../servicios/paciente.service';

@Component({
  selector: 'app-mis-pacientes',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent, NgIf, NgFor, DetalleTurnoEspComponent, DetalleResenaEspComponent],
  templateUrl: './mis-pacientes.component.html',
  styleUrl: './mis-pacientes.component.css'
})

export class MisPacientesComponent implements OnInit {
  //public listaUsuarioPaciente: Usuario[] = []; AGREGUE LO SIGUIENTE 26 10 
  public listaUsuarioPaciente: TurnoPaciente[] = [];
  public listaUsuarioPacienteExcel: Excel[] = [];
  suscriptionList: Subscription = new Subscription();
  loading = false;
  apellidoEspecialista:string;
  nombreEspecialista:string;
  emailEspecialista:string
  fotoPerfilUnoPaciente:string;

  //Paciente AGREGADO
  apellidoPaciente:string;
  nombrePaciente:string;  
  

  //Formulario Validar
  registrarForm: FormGroup;
  activarCancelar:boolean;
  activarCalificacion:boolean = false;
  activarVerResena:boolean = false;
  activarEncuesta:boolean = false;
  activarHC:boolean = false;
  actualTurno: CancelarTurnoPaciente;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _usuarioService:UsuarioService, //AGREGUE LO SIGUIENTE 26 10
              private _turnopacienteService: PacienteService,
              public srvExcel:ExcelExportService) { }

  ngOnInit(): void {
    this.obtener_localstorage()
    this.getList();
  }

  ngOnDestroy(): void {
    this.suscriptionList.unsubscribe();
 }

 obtener_localstorage(){
  let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
  this.apellidoEspecialista=datoPerfil.apellido;
  this.nombreEspecialista=datoPerfil.nombre;
  this.emailEspecialista=datoPerfil.email;
  this.fotoPerfilUnoPaciente=datoPerfil.fotoPerfilUno;
  //this.fotoPerfilDosPaciente=datoPerfil.fotoPerfilDos;
  //this.dniPaciente=datoPerfil.dni; */
  console.log('Mis Pacientes Perfil  --> ', datoPerfil);
}

 getList() {
  //this.suscriptionList == this._usuarioService.getHistoriaClinicaEspecialistaAlmenosUno(this.emailEspecialista).subscribe(data =>{
  this.suscriptionList == this._usuarioService.getHistoriaClinicaEspecialistaAlmenosUno(this.emailEspecialista).subscribe(data =>{
      console.log('Usuario Adm ',data);
      this.listaUsuarioPaciente = [];
      data.forEach((element:any) => {
        this.listaUsuarioPaciente.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })

        /*console.log('Usuario Adm id',element.payload.doc.id);
        console.log('Usuario Adm data ',element.payload.doc.data());
        console.log('Usuario Adm Lista Pacientes',this.listaUsuarioPaciente); */

        //Filtramos los Paciente
        //this.listaUsuarioPaciente = this.listaUsuarioPaciente.filter((obj) => {
        //  return obj.perfil === "Paciente";
        //});
      });
      console.log('Lista Pacientes del Profesional ',this.listaUsuarioPaciente);
    })
  }

  verResena(item: any) {
    //console.log("verResena " , item);
    this.activarVerResena=true;
    this.actualTurno=item;
  }

  verHC(item: any) {
    //console.log("verResena " , item);
    this.activarHC=true;
    this.actualTurno=item;
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
        //apellido : this.listaUsuarioPaciente[i].apellido, AGREGUE 26 10
        apellido : this.listaUsuarioPaciente[i].apellidoPaciente,
        //nombre : this.listaUsuarioPaciente[i].nombre,
        nombre : this.listaUsuarioPaciente[i].nombrePaciente,
        //dni : this.listaUsuarioPaciente[i].dni LO SAQUE::AGREGARLO 26 10
        //edad : this.listaUsuarioPaciente[i].edad, LO SAQUE::AGREGARLO 26 10
        //obraSocial : this.listaUsuarioPaciente[i].obraSocial, LO SAQUE ::AGREGARLO 26 10 
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
        //perfil : this.listaUsuarioPaciente[i].perfil LO SAQUE :: AGREGARLO
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