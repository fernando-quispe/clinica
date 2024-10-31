import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EspecialistaService } from '../servicios/especialista.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

/*export const especialistaGuard: CanActivateFn = (route, state) => {
  return true;
};*/

@Injectable({
  providedIn: 'root'
})

export class EspecialistaGuard implements CanActivate {

  estado: boolean;

  constructor(public srvAuth: EspecialistaService ){}

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
              title: 'ACCESO DENEGADO! El usuario debe tener perfil Especialista.',
              showConfirmButton: false,
              timer: 5000
            })
            return false;
          }
  }
}