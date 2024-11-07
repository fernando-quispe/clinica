import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IngresosService {

  constructor(private firestore: AngularFirestore) { }

  // Método para obtener los datos de ingresos desde Firestore
  getIngresos(): Observable<any[]> {
    return this.firestore.collection('ingresos').valueChanges();
  }
}