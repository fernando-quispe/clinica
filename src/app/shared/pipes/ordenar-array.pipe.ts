import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarArray',
  standalone: true 
})

export class OrdenarArrayPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform<T>(array: Array<T>, args: string): Array<T> {
    return array.sort((a: any, b: any) => {
      if (a[args].toLowerCase() < b[args].toLowerCase()) {
        return -1;
      } else if (a[args].toLowerCase() > b[args].toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}