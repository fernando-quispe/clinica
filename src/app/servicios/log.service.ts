import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Log {
  userId: string;
  timestamp: Date;
  //action: string;
}

@Injectable({
  providedIn: 'root'
})

export class LogService {
  constructor(private firestore: AngularFirestore) {}

  logUserAccess(userId: string): void {
    const log: Log = {
      userId,
      timestamp: new Date()
      //action
    };
    this.firestore.collection('logs').add(log);
  }

  getLogs(): Observable<Log[]> {
    return this.firestore.collection<Log>('logs', ref => ref.orderBy('timestamp', 'desc')).valueChanges();
  }

/*
  registrarIngreso(usuario: string) {
    firebase.firestore().ref('logs').push({
      usuario,
      fecha: new Date().toISOString()
    });
  }*/
}