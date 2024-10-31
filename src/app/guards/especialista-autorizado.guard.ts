import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EspecialistaAutorizadoService } from '../servicios/especialista-autorizado.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

/*export const especialistaAutorizadoGuard: CanActivateFn = (route, state) => {
  return true;
};*/

@Injectable({
  providedIn: 'root'
})

export class EspecialistaAutorizadoGuard implements CanActivate {

  estado: boolean; 

  constructor(public srvAuth: EspecialistaAutorizadoService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.estado = this.srvAuth.isActualSessionEspecialista();
          if (this.estado) {
            return true;
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'ACCESO DENEGADO! El usuario Especialista debe ser autorizado por un Administrador.',
              showConfirmButton: false,
              timer: 5000
            })
            return false;
          }
  }
}