import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { Turno } from '../interfaces/turno';
import { TurnoPaciente } from '../clases/turno-paciente';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private _refresh$ = new Subject<void>()

  constructor(private _firestore: AngularFirestore) { }

  get refresh$(){
    return this._refresh$;
  }

  crearUsuario(usuarioDato:Usuario){
    return this._firestore.collection('usuarios').add(usuarioDato);
  }

  getListadoUsuario(): Observable<any>{
    return this._firestore.collection('usuarios').stateChanges();
  }

  getPerfilUsuario(correo: string): Observable<any>{
    return this._firestore.collection('usuarios', ref => ref.where('email','==',correo)).snapshotChanges();
  }

  getEspecialistaAutorizado(correo: string): Observable<any>{
    return this._firestore.collection('usuarios', ref => ref.where('email','==',correo).where('aprobadoPorAdmin','==',true)).snapshotChanges();
  }

  eliminarUsuario(idUsuario: string): Promise<any>{
    //console.log('Id servicio ', idUsuario);
    return this._firestore.collection('usuarios').doc(idUsuario).delete();
  }

  modificarUsuario(idUsuario: string,usuarioDato:Usuario):Promise<any>{
    return this._firestore.collection('usuarios').doc(idUsuario).update(usuarioDato);
  }

  getUsuario(documentId: string): Observable<any>{
    return  this._firestore.collection('usuarios').doc(documentId).snapshotChanges();
  }

  public habilitarCuenta(uid: string) {
    console.log('servicio habilitarCuenta');
    let value = 'SI';
    return this._firestore.collection('usuarios').doc(uid).update({ aprobadoPorAdmin: value });
  }

  public deshabilitarCuenta(uid: string) {
    let value = 'NO';
    return this._firestore.collection('usuarios').doc(uid).update({ aprobadoPorAdmin: value });
  }

  crearTurno(turnoDato:Turno){
    return this._firestore.collection('turnos').add(turnoDato);
  }

  getEspecialidades(): Observable<any>{
    return this._firestore.collection('turnos').stateChanges();
  }

  //agregue para Turnos Clinica
  getListaEspecialistas(): Observable<any>{
    return this._firestore.collection('turnos').stateChanges();
  }

  getTurnosDrYEspecialidad(espcialidad:string,emailDoctor:string): Observable<any>{
    return this._firestore.collection('turnos', ref => ref.where('email','==',emailDoctor).where('especialidad','==',espcialidad)).snapshotChanges();
  }

  getTurnosDr(emailDoctor:string): Observable<any>{
    return this._firestore.collection('turnos', ref => ref.where('email','==',emailDoctor)).snapshotChanges();
  }

  eleminarHorarioLaboralTurno(id: string): Promise<any>{
    return this._firestore.collection('turnos').doc(id).delete();
  }

  crearTurnoPacientes(dato:TurnoPaciente){
    return this._firestore.collection('turnopaciente').add(dato);
  }

  getTurnoPacientes(emailPaciente:string): Observable<any>{
    return this._firestore.collection('turnopaciente', ref => ref.where('emailPaciente','==',emailPaciente)).snapshotChanges();
  }

  getTurnosPacienteFiltradoDrYEspecialidad(espcialidad:string,emailDoctor:string): Observable<any>{
    return this._firestore.collection('turnopaciente', ref => ref.where('emailEspecialista','==',emailDoctor).where('especialidad','==',espcialidad)).snapshotChanges();
  }

  cancelarTurnoPaciente(id: string,cancelar:string,motivo:string):Promise<any>{
    return this._firestore.collection('turnopaciente').doc(id).update({ estado: cancelar,canceladoComentario: motivo });
  }

  calificacionTurnoPaciente(id: string,calificaion:string):Promise<any>{
    return this._firestore.collection('turnopaciente').doc(id).update({atencion: calificaion });
  }

  encuestaTurnoPaciente(id: string,encuesta:string):Promise<any>{
    return this._firestore.collection('turnopaciente').doc(id).update({encuesta: encuesta });
  }

  getTurnoEspecialista(emailEspecialista:string): Observable<any>{
    return this._firestore.collection('turnopaciente', ref => ref.where('emailEspecialista','==',emailEspecialista)).snapshotChanges();
  }

  getHistoriaClinicaPaciente(emailPaciente:string): Observable<any>{
    return this._firestore.collection('turnopaciente', ref => ref.where('emailPaciente','==',emailPaciente)).snapshotChanges();
  }

  getVerResaniaPaciente(id:string): Observable<any>{
    return this._firestore.collection('turnopaciente', ref => ref.where('id','==',id)).snapshotChanges();
  }

  aceptarTurnoEspecialista(id: string,aceptar:string):Promise<any>{
    return this._firestore.collection('turnopaciente').doc(id).update({ estado: aceptar });
  }

  finalizadaAtencion(id: string,finalizado:string,resena:string,diagnostico:string):Promise<any>{
    return this._firestore.collection('turnopaciente').doc(id).update({ estado: finalizado,resena: resena, diagnostico:diagnostico });
  }

  guardarHistoriaClinicaServicio(id:string,inputAltura:string,inputPeso:string,inputTemperatura:string,inputPresion:string,
                                inputClave1:string,inputValor1:string,inputClave2:string,inputValor2:string,inputClave3:string,
                                inputValor3:string):Promise<any>{
    return this._firestore.collection('turnopaciente').doc(id).update({ altura: inputAltura, peso:inputPeso, temperatura: inputTemperatura,
                                                                        presion:inputPresion, clave1:inputClave1, valor1:inputValor1,
                                                                        clave2:inputClave2, valor2:inputValor2, clave3:inputClave3, 
                                                                        valor3:inputValor3 });
  }

  getHistoriaClinicaEspecialistaAlmenosUno(emailEspecialista:string): Observable<any>{
    return this._firestore.collection('turnopaciente', ref => ref.where('emailEspecialista','==',emailEspecialista).where('estado','==','FINALIZADO')).snapshotChanges();
  }

  getPerfil(correo: string): Observable<any>{
    return this._firestore.collection('usuarios', ref => ref.where('email','==',correo)).snapshotChanges();
  }
}