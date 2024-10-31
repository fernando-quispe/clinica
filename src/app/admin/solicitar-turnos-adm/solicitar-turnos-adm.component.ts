import { Component, NgModule, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Subscription } from 'rxjs';
import { Turno } from '../../interfaces/turno';
import { TurnoPaciente } from '../../clases/turno-paciente';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { FormsModule, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-solicitar-turnos-adm',
  standalone: true,
  imports: [MenuGralComponent, ReactiveFormsModule, FormsModule, NgFor, NgIf],
  templateUrl: './solicitar-turnos-adm.component.html',
  styleUrl: './solicitar-turnos-adm.component.css'
})

export class SolicitarTurnosAdmComponent implements OnInit {
  public listaUsuarioPaciente: Usuario[] = [];
  loading = false;

  //Paciente
  usuarioPacienteMailIngresado:any;
  apellidoPaciente:string;
  nombrePaciente:string;
  fotoPerfilUnoPaciente:string;
  fotoPerfilDosPaciente:string;
  dniPaciente:string;
  //Especialista
  especialidadIngresada:any;
  especialistaIngresado:any;
  fechaIngresada:any;
  apellidoEspecialista:string;
  nombreEspecialista:string;
  fotoEspecialista:string;
  isAdmin = true;
  suscriptionList: Subscription = new Subscription();

  arrayEspecialistas: Turno[] = [];
  listaTurnoDoc:Turno[] = [];
  arrayEspecialistasFiltrado: any[] = [];
  arrayTurnos:any[] = [];
  arrayPacientes:any[] = [];
  arrayEspecialidades:any[] = [];
  public listaUsuarioEspecialista: Usuario[] = [];
  listaTurnoPaciente:TurnoPaciente[] =[];

  constructor(private svfUsuario: UsuarioService,
              private _usuarioService:UsuarioService,
              private rutas: Router) { }

  ngOnInit(): void {
    this.getList();
    this.obtener_localstorage();
    this.getListPacientes();
    let contenedorMain:any = document.getElementById("main-row");
    contenedorMain.removeAttribute("hidden");
    contenedorMain.style.animation = "slide-in-elliptic-left-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    // Aca ya esta cargado el email del paciente
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
  }

  getListPacientes() {
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

  getList() {
    this.suscriptionList == this.svfUsuario.getEspecialidades().subscribe(data =>{
      //console.log('data ',data);
      this.arrayEspecialistas = [];
      data.forEach((element:any) => {
        this.arrayEspecialistas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //Filtramos los Especialistas
       /*  this.arrayEspecialistas = this.arrayEspecialistas.filter((obj) => {
          return obj.perfil === "Especialista";
        }); */
      });
        //console.log("Found ", this.arrayEspecialistas);
        this.arrayEspecialidades =  this.leerEspecialidades();
        console.log("array arrayEspecialistas ", this.arrayEspecialistas);
    })
  }

  obtener_localstorage(){
    let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
    this.usuarioPacienteMailIngresado = ''; //datoPerfil.email;
    this.apellidoPaciente=datoPerfil.apellido;
    this.nombrePaciente=datoPerfil.nombre;
    this.fotoPerfilUnoPaciente=datoPerfil.fotoPerfilUno;
    this.fotoPerfilDosPaciente=datoPerfil.fotoPerfilDos;
    this.dniPaciente=datoPerfil.dni;
    //console.log('Email del Paciente ', this.usuarioPacienteMailIngresado);
  }

  public leerEspecialidades()
  {
    let arrayEspecialidades = new Array();
    let arrayEspecialidadesNoRepetidas = new Array();
    //let arrayEspecialistas = await this.leerEspecialistasDB();
    let arrayEspecialistas = this.arrayEspecialistas; //Turnos
    
    arrayEspecialistas.forEach( (turno)=> {
      arrayEspecialidades.push(turno.especialidad);
      /* turno.especialidad.forEach( (especialidad:any) =>
      {
        arrayEspecialidades.push(especialidad);
      }); */
    });

    arrayEspecialidades.forEach( (element)=> {
        if (!arrayEspecialidadesNoRepetidas.includes(element))
        {
          arrayEspecialidadesNoRepetidas.push(element);
        }
    });
    console.log('arrayEspecialidadesNoRepetidas ', arrayEspecialidadesNoRepetidas);
    return arrayEspecialidadesNoRepetidas;
  }

  especialidadElegida(valorEmitidoRecibido:any)
  {
    this.especialidadIngresada = valorEmitidoRecibido;
    this.especialistaIngresado = "";
    this.fechaIngresada = "";
    let listadoTurnos = document.getElementById("opciones-turnos");
    listadoTurnos?.setAttribute("hidden","true");
    this.getListEspecialistasHabilitados(this.especialidadIngresada);
    this.arrayEspecialistasFiltrado = this.listaUsuarioEspecialista;
  }

  getListEspecialistasHabilitados(param:string) {
    this.suscriptionList == this.svfUsuario.getListadoUsuario().subscribe(data =>{
      //console.log(data);
      this.listaUsuarioEspecialista = [];
      data.forEach((element:any) => {
        this.listaUsuarioEspecialista.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      //Filtramos los Especialistas
      this.listaUsuarioEspecialista = this.listaUsuarioEspecialista.filter((obj) => {
        return (obj.especialidad === param || obj.otraEspecialidad === param ) &&  obj.aprobadoPorAdmin === 'SI';
      });
      console.log("Especialistas Found ", this.listaUsuarioEspecialista);
    })
  }

  getTurnosDrYEspecialidadServicio(especialidadDoc:string,emailDoc:string){
    this.suscriptionList == this.svfUsuario.getTurnosDrYEspecialidad(especialidadDoc,emailDoc).subscribe(data =>{
      //console.log(data);
      this.listaTurnoDoc = [];
      data.forEach((element:any) => {
          this.listaTurnoDoc.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        //Filtramos los Especialistas
        /* this.listaUsuarioEspecialista = this.listaUsuarioEspecialista.filter((obj) => {
          return (obj.especialidad === param || obj.otraEspecialidad === param ) &&  obj.aprobadoPorAdmin === 'SI';
        }); */
        console.log("listaTurnoDoc  ", this.listaTurnoDoc);
    })
  }

  pacienteElegido(paciente:any)
  {
    console.log('paciente ',paciente);
    this.arrayTurnos=[];
    this.usuarioPacienteMailIngresado = paciente.email;
    let listadoTurnos = document.getElementById("col3");
    listadoTurnos?.setAttribute("hidden","true");
    setTimeout(() => {
      let listadoTurnos:any = document.getElementById("col3");
      listadoTurnos?.removeAttribute("hidden");
      listadoTurnos.style.animation = "slide-in-elliptic-top-fwd 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }, 1000);
  }

  especialistaElegido(especialista:any)
  {
    console.log('especialistaElegido ',especialista);
    this.arrayTurnos=[];
    this.especialistaIngresado = especialista.email;
    this.apellidoEspecialista = especialista.apellido;
    this.nombreEspecialista = especialista.nombre;
    this.fotoEspecialista = especialista.fotoPerfilUno;
    // Enviar los Turnos de este Especialista elegido (Filtrado por email/especialidad)
    this.getTurnosDrYEspecialidadServicio(this.especialidadIngresada,this.especialistaIngresado);
    this.generarTurnos();
    let listadoTurnos = document.getElementById("opciones-turnos");
    listadoTurnos?.setAttribute("hidden","true");
    setTimeout(() =>
    {
      let listadoTurnos:any = document.getElementById("opciones-turnos");
      listadoTurnos?.removeAttribute("hidden");
      listadoTurnos.style.animation = "slide-in-elliptic-top-fwd 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }, 1000);
  }

  //****************************************************** */
  // Procedimientos para seleccionar Turno para el paciente
  //******************************************************* */

  generarTurnos() {
    // MANEJO DE FECHAS
    let arrayFechasA1Semanas = new Array();
    let arrayFechasA2Semanas = new Array();

    for (let i = 1; i < 8; i++) {
      let fechaActual = new Date();
      fechaActual.setDate(fechaActual.getDate() + i);
      arrayFechasA1Semanas.push(fechaActual);
    }

    for (let i = 8; i < 15; i++) {
      let fechaActual2 = new Date();
      fechaActual2.setDate(fechaActual2.getDate() + i);
      arrayFechasA2Semanas.push(fechaActual2);
    }
    // console.log(arrayFechasA1Semanas);
    // console.log(arrayFechasA2Semanas);
    // -----------------------------
    //obtener el listado del lunes filtrar el lunes
    this.listaTurnoDoc.forEach( (turnoDoc:any) => {
      // a este lunes le ponemos la fecha.
      switch (turnoDoc.dia) {
        case "Lunes":
          this.arrayTurnos.push(this.obtenerFechaByDia(true,"Lunes") + " " + turnoDoc.turno);
          this.arrayTurnos.push(this.obtenerFechaByDia(false,"Lunes") + " " +  turnoDoc.turno);
        break;
        case "Martes":
          this.arrayTurnos.push(this.obtenerFechaByDia(true,"Martes") + " " + turnoDoc.turno);
          this.arrayTurnos.push(this.obtenerFechaByDia(false,"Martes") + " " +  turnoDoc.turno);
        break;
        case "Miercoles":
          this.arrayTurnos.push(this.obtenerFechaByDia(true,"Miercoles") + " " + turnoDoc.turno);
          this.arrayTurnos.push(this.obtenerFechaByDia(false,"Miercoles") + " " +  turnoDoc.turno);
        break;
        case "Jueves":
          this.arrayTurnos.push(this.obtenerFechaByDia(true,"Jueves") + " " + turnoDoc.turno);
          this.arrayTurnos.push(this.obtenerFechaByDia(false,"Jueves") + " " +  turnoDoc.turno);
        break;
        case "Viernes":
          this.arrayTurnos.push(this.obtenerFechaByDia(true,"Viernes") + " " + turnoDoc.turno);
          this.arrayTurnos.push(this.obtenerFechaByDia(false,"Viernes") + " " +  turnoDoc.turno);
        break;
        case "Sabado":
          this.arrayTurnos.push(this.obtenerFechaByDia(true,"Sabado") + " " + turnoDoc.turno);
          this.arrayTurnos.push(this.obtenerFechaByDia(false,"Sabado") + " " +  turnoDoc.turno);
        break;
        default:
          break;
      }
    })
    this.arrayTurnos.sort((a,b)=> {
      let spliteoA = a.split(" ",2);
      let spliteoB = b.split(" ",2);
      console.log('spliteoA ',spliteoA);
      console.log(spliteoB);
      if (spliteoA[1] > spliteoB[1]) {
        return 0;
      }
      else {
        return -1;
      }
    });
    console.log(this.arrayTurnos);
    this.filtrarTurnosNoDisponibles();
  }

  getTurnosPacientesDrEsp(especialidadDoc:string,emailDoc:string){
    this.suscriptionList == this.svfUsuario.getTurnosPacienteFiltradoDrYEspecialidad(especialidadDoc,emailDoc).subscribe(data =>{
      //console.log(data);
      this.listaTurnoPaciente = [];
      data.forEach((element:any) => {
        this.listaTurnoPaciente.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      //Filtramos los Especialistas
      /* this.listaUsuarioEspecialista = this.listaUsuarioEspecialista.filter((obj) => {
      return (obj.especialidad === param || obj.otraEspecialidad === param ) &&  obj.aprobadoPorAdmin === 'SI';
      }); */
      console.log("listaTurnoPaciente  ", this.listaTurnoPaciente);
    })
  }

  public async filtrarTurnosNoDisponibles() {
    this.getTurnosPacientesDrEsp(this.especialidadIngresada,this.especialistaIngresado);
    let turnosTotalesLeidos =  this.listaTurnoPaciente; //await this.srvFirebase.leerTurnosDB();
    turnosTotalesLeidos.forEach((element) => {
      //A todo aquel turno que este en pendiente de ser aceptado o aceptado no se podrá tomar
      if (element.estado == 'PENDIENTE' || element.estado == 'ACEPTADO') {
        this.arrayTurnos = this.arrayTurnos.filter((a) => {
          if (a == element.fechaSolicitada) {
            return 0;
          }
          else {
            return 1;
          }
        });
      }
    });
    console.log(this.arrayTurnos);
  }

  turnoClickeado(turnoRecibido:any) {
    this.fechaIngresada = turnoRecibido;
  }

  obtenerFechaByDia(primerSemana:boolean, diaABuscar:string) {
    let fechaEncontrada;
    if (primerSemana == true) {
      let arrayFechasA1Semanas: Date[] = new Array();
      for (let i = 1; i < 8; i++) {
        let fechaActual = new Date();
        fechaActual.setDate(fechaActual.getDate() + i);
        arrayFechasA1Semanas.push(fechaActual);
      }
      switch (diaABuscar) {
        case 'Lunes': {
          arrayFechasA1Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Mon") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Lunes " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Martes': {
          arrayFechasA1Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Tue") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Martes " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Miercoles': {
          arrayFechasA1Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Wed") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Miercoles " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Jueves': {
          arrayFechasA1Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Thu") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Jueves " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Viernes': {
          arrayFechasA1Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Fri") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Viernes " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Sabado': {
          arrayFechasA1Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Sat") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Sabado " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
      }
    }
    else {
      let arrayFechasA2Semanas: Date[] = new Array();
      for (let i = 8; i < 15; i++) {
        let fechaActual = new Date();
        fechaActual.setDate(fechaActual.getDate() + i);
        arrayFechasA2Semanas.push(fechaActual);
      }
      switch (diaABuscar) {
        case 'Lunes': {
          arrayFechasA2Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Mon") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Lunes " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Martes': {
          arrayFechasA2Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Tue") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Martes " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Miercoles': {
          arrayFechasA2Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Wed") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Miercoles " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Jueves': {
          arrayFechasA2Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Thu") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Jueves " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Viernes': {
          arrayFechasA2Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Fri") == true){
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Viernes " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
        case 'Sabado': {
          arrayFechasA2Semanas.forEach(element => {
            let stringFecha = element.toString();
            if (stringFecha.includes("Sat") == true) {
              let fechaSpliteada = stringFecha.split(" ",3);
              console.log(fechaSpliteada);
              fechaEncontrada = "Sabado " + fechaSpliteada[2] + " de " + this.traducirMesIngles(fechaSpliteada[1]);
            }
          });
          break;
        }
      }
    }
    return fechaEncontrada;
  }

  public traducirMesIngles(mesIngles:string) {
    let traduccion;
    switch (mesIngles) {
      case 'Jan': {
        traduccion = "Ene";
        break;
      }
      case 'Feb': {
        traduccion = "Feb";
        break;
      }
      case 'Mar': {
        traduccion = "Mar";
        break;
      }
      case 'Apr': {
        traduccion = "Abr";
        break;
      }
      case 'May': {
        traduccion = "May";
        break;
      }
      case 'Jun': {
        traduccion = "Jun";
        break;
      }
      case 'Jul': {
        traduccion = "Jul";
        break;
      }
      case 'Aug': {
        traduccion = "Ago";
        break;
      }
      case 'Sep': {
        traduccion = "Sep";
        break;
      }
      case 'Oct': {
        traduccion = "Oct";
        break;
      }
      case 'Nov': {
        traduccion = "Nov";
        break;
      }
      case 'Dec': {
        traduccion = "Dic";
        break;
      }
    }
    return traduccion;
  }

  solicitarTurno() {
    if (this.especialidadIngresada != "" && this.especialistaIngresado != "" && this.fechaIngresada != "") {
      //Error
      //this.srvFirebase.subirTurnoDB(this.especialidadIngresada, this.especialistaIngresado, this.fechaIngresada, this.srvAuth.userLogedmail, undefined);
      const datoTurno: TurnoPaciente = {
        fechaSolicitada:this.fechaIngresada,
        emailPaciente:this.usuarioPacienteMailIngresado,
        estado:'PENDIENTE',
        canceladoComentario:'',
        resena:'',
        verResena:'NO',
        encuesta:'',
        atencion:'',
        fechaFinalizado:'',
        especialidad:this.especialidadIngresada,
        estadoEspecialista:'',
        emailEspecialista:this.especialistaIngresado,
        apellidoPaciente:this.apellidoPaciente,
        nombrePaciente:this.nombrePaciente,
        apellidoEspecialista:this.apellidoEspecialista,
        nombreEspecialista:this.nombreEspecialista,
        fotoEspecialista:this.fotoEspecialista,
        fotoPerfilUnoPaciente:this.fotoPerfilUnoPaciente,
        fotoPerfilDosPaciente:this.fotoPerfilDosPaciente,
        diagnostico:'',
        altura:'',
        peso:'',
        temperatura:'',
        presion:'',
        clave1:'',
        valor1:'',
        clave2:'',
        valor2:'',
        clave3:'',
        valor3:'',
      }
      this.svfUsuario.crearTurnoPacientes(datoTurno);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno fue registrado con exito!',
        showConfirmButton: false,
        timer: 5000
      })
      let contenedorMain:any = document.getElementById("main-row");
      contenedorMain.style.animation = "slide-out-elliptic-left-bck 0.7s ease-in both";
      this.especialidadIngresada = "";
      this.especialistaIngresado = "";
      this.fechaIngresada = "";
      this.apellidoEspecialista= "";
      this.nombreEspecialista= "";
      this.fotoEspecialista= "";
      let listadoTurnos = document.getElementById("opciones-turnos");
      listadoTurnos?.setAttribute("hidden","true");

      setTimeout(() => {
        let contenedorMain:any = document.getElementById("main-row");
        contenedorMain.style.animation = "slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
      }, 1500);
    }
    this.rutas.navigate(['/paciente/misTurnos']);
  }
}