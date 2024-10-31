import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  constructor() { }

  error(code: string):string{
    switch(code){
      // Email ya registrado
      case 'auth/email-already-in-use':
        return 'El correo electrónico ya esta registrado'

      // Correo invalido
      case 'auth/invalid-email':
        return 'El correo electrónico es invalido'

      // La Contraseña es muy debil
      case 'auth/weak-password':
        return 'La contraseña es muy débil'

      case 'auth/user-not-found':
        return 'Usuario inválido'  

      case 'auth/wrong-password':
        return 'La contraseña es inválida'  

      default:
        return 'Error desconocido';
    }
  }
}