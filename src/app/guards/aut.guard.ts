import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

/*export const autGuard: CanActivateFn = (route, state) => {
  return true;
};*/


@Injectable({
  providedIn: 'root'
})

export class AutGuard implements CanActivate {

  estado: boolean; 

  constructor(public srvAuth:AuthService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.estado = this.srvAuth.isActualSessionAdministrador();
      if (this.estado) {
        return true;
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ACCESO DENEGADO! El Usuario debe tener perfil Administrador.',
          showConfirmButton: false,
          timer: 5000
        })
        return false;
    }
  }
}