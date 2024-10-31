import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEspecialista',
  standalone: true
})

export class FilterEspecialistaPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length <3) return value;
    const resultFilter = [];
    for (const post of value ) {
      if (post.especialidad.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.nombrePaciente.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.apellidoPaciente.toLowerCase().indexOf(arg.toLowerCase()) > -1)  {

        resultFilter.push(post);
      }
    };
    return resultFilter;
  }
}