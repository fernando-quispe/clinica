import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TurnospacienteService {
  
  constructor(private firestore: AngularFirestore) { }

   // Método para obtener los datos de turnospaciente desde Firestore
   getIngresos(): Observable<any[]> {
    return this.firestore.collection('turnopaciente').valueChanges();
  }
}
