import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

/*export const especialistaHijasGuard: CanActivateFn = (route, state) => {
  return true;
};*/

@Injectable({
  providedIn: 'root'
})

export class EspecialistaHijasGuard implements CanActivateChild {
  //router: Routes;
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let leePerfil = JSON.parse(localStorage.getItem("perfilUsuario"));
      let tipoPerfil = leePerfil.perfil;

      if (tipoPerfil != 'Especialista') {
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El usuario debe tener perfil Especialista.',
          showConfirmButton: false,
          timer: 5000
        })
         //this.router.navigate(['bienvenido']);
         return false;
      }else{
        return true;
      }
  }
}