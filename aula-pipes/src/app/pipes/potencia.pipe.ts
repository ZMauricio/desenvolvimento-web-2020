import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'potencia'
})
export class PotenciaPipe implements PipeTransform {

  transform(value: number, expoente: number): number {

    if (value && expoente) {
      return Math.pow(value, expoente);
    }

   return 0;
  }

}
