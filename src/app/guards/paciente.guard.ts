import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

/*export const pacienteGuard: CanActivateFn = (route, state) => {
  return true;
};*/

@Injectable({
  providedIn: 'root'
})

export class PacienteGuard implements CanActivate {

  estado: boolean;

  constructor(public srvAuth: PacienteService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.estado = this.srvAuth.isActualSessionPaciente();
          if (this.estado) {
            return true;
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'ACCESO DENEGADO! El usuario debe tener perfil Paciente.',
              showConfirmButton: false,
              timer: 5000
            })
            return false;
          }
  }
}