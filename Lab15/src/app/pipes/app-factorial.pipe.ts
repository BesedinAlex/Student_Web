import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFactorial'
})
export class AppFactorialPipe implements PipeTransform {
  res = 1;
  transform(value: any) {
    for (let i = 1; i <= value; i++) {
      this.res *= i;
    }
    return value + '! = ' + this.res;
  }

}
