import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true
})

export class CustomDatePipe implements PipeTransform {

  transform(value: Date | string | number, format: string = 'shortDate'): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);

    // Aquí puedes definir el formato que deseas
    // Ejemplo básico: solo para 'shortDate' y 'fullDate'
    switch (format) {
      case 'shortDate':
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      case 'fullDate':
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
      default:
        return date.toString();
    }
  }
}