import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class AppPowPipe implements PipeTransform {

  transform(value: any, powNumber:number = 1, pref:string = '='): any {
    return pref + Math.pow(value, powNumber);
  }

}
