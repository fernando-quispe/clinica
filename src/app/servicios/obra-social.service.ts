import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ObraSocial } from '../clases/obra-social';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ObraSocialService {

  constructor(private _firestore:AngularFirestore) { }

  crearObraSocial(obrasocialDato:ObraSocial){
    console.log("Llegamos a grabar Obra Social");
    return this._firestore.collection('obrasociales').add(obrasocialDato);
  }

  getListadoObraSocial(): Observable<any>{
    return this._firestore.collection('obrasociales').stateChanges();
  }

  eliminarObraSocial(idObrasocial: string): Promise<any>{
    console.log('Id servicio ', idObrasocial);
    return this._firestore.collection('obrasociales').doc(idObrasocial).delete();
  }

  modificarObraSocial(idObrasocial: string,obrasocialDato:ObraSocial):Promise<any>{
    return this._firestore.collection('obrasociales').doc(idObrasocial).update(obrasocialDato);
  }
}