import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})

export class FilterPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length <3) return value;
    const resultFilter = [];
    for (const post of value ) {
      if (post.especialidad.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.nombreEspecialista.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.apellidoEspecialista.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.fechaSolicitada.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.estado.toLowerCase().indexOf(arg.toLowerCase()) > -1 )  {

        resultFilter.push(post);
      }
    };
    return resultFilter;
  }
}