import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTurnoclinica',
  standalone: true
})
export class FilterTurnoclinicaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length <3) return value;
    const resultFilter = [];
    for (const post of value ) {
      if (post.especialidad.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.email.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.otraespecialidad.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.estado.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.turno.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.dia.toLowerCase().indexOf(arg.toLowerCase()) > -1 )  {

        resultFilter.push(post);
      }
    };
    return resultFilter;
  }
}