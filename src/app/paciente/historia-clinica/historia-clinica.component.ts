import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TurnoPaciente } from '../../clases/turno-paciente';
import { Subscription } from 'rxjs';
import { CancelarTurnoPaciente } from '../../interfaces/cancelar-turno-paciente';
import { UsuarioService } from '../../servicios/usuario.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BotonhcDirective } from '../../directivas/botonhc.directive';
import { BotondescargarhcDirective } from '../../directivas/botondescargarhc.directive';

@Component({
  selector: 'app-historia-clinica',
  standalone: true,
  imports: [NgIf, NgFor, BotondescargarhcDirective],
  templateUrl: './historia-clinica.component.html',
  styleUrl: './historia-clinica.component.css'
})

export class HistoriaClinicaComponent implements OnInit {
  public listaTurnoPaciente: TurnoPaciente[] = [];
  suscriptionList: Subscription = new Subscription();
  verHistoriaClinicaEsp:boolean = false;
  loading = false;
  

  actualTurno: CancelarTurnoPaciente;

  //Paciente
  apellidoPaciente:string;
  nombrePaciente:string;
  emailPaciente:string;
  fotoPerfilUnoPaciente:string;
  fotoPerfilDosPaciente:string;
  dniPaciente:string;
  inputCancelado:string;
  inputResena:string;
  inputDiagnotico:string;
  //HC
  inputAltura:string;
  inputPeso:string;
  inputTemperatura:string;
  inputPresion:string;
  inputClave1?:string;
  inputValor1?:string;
  inputClave2?:string;
  inputValor2?:string;
  inputClave3?:string;
  inputValor3?:string;
  fecha:string;

  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');
  ChangedFormat = this.pipe.transform(this.today, 'dd/MM/YYYY');

  constructor(private _usuarioService:UsuarioService) {
    this.downloadPDF();
  }

  ngOnInit(): void {
    this.obtener_localstorage();
    this.getList();
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
    this.suscriptionList.unsubscribe();
  }

  changeFormat(){
    let ChangedFormat = this.pipe.transform(this.today, 'dd/MM/YYYY');
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
  }

  obtener_localstorage(){
    let datoPerfil = JSON.parse(localStorage.getItem('perfil'));
    this.apellidoPaciente=datoPerfil.apellido;
    this.nombrePaciente=datoPerfil.nombre;
    this.emailPaciente=datoPerfil.email;
    this.fotoPerfilUnoPaciente=datoPerfil.fotoPerfilUno;
    this.fotoPerfilDosPaciente=datoPerfil.fotoPerfilDos;
    this.dniPaciente=datoPerfil.dni;
    console.log('Email del Paciente HC --> ', this.emailPaciente);
  }

  getList() {
    //console.log("Lista MisTurnos - Buscar con ",this.emailPaciente);
    this.suscriptionList == this._usuarioService.getHistoriaClinicaPaciente(this.emailPaciente).subscribe(data =>{
    this.listaTurnoPaciente = [];
      data.forEach((element:any) => {
        this.listaTurnoPaciente.push({
        id:element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
    console.log("Lista HC ",this.listaTurnoPaciente);
    })
  }

  public downloadPDF(): void{
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    /*
    Iniciamos el valor “doc” que será el objeto del documento
    para generar el PDF añadiendo la orientación “p”
    (Portrait = vertical), la unidad de media como “pt” y el tamaño del PDF, “A4”.

    doc.text('Hola Wally !!!', 10, 10); //Primer Demo de grabar el formulario
    doc.save('HC-Wally.pdf');
    */
    html2canvas(DATA).then((canvas) => {
      const img = canvas.toDataURL('../../../assets/pacientes/clinica.jpg');
      // Añadir imagen Canvas a PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() ;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
      }).then((docResult) => {
        let nombrePDF = this.apellidoPaciente+'-'+this.dniPaciente + '-historia-clinica';
        //doc.save( nombrePDF );
        docResult.save(nombrePDF);
      });
  }

  mostrarHistoriaClinicaEsp(item:any){
    this.verHistoriaClinicaEsp=true;
    this.actualTurno=item;
  }
}