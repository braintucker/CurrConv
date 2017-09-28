import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fixed'})
export class FixedPipe implements PipeTransform {

  transform(value: number, digits=2) {
    //console.log('fixed pipe arg', digits);
    return value.toFixed(digits);
  }
}
