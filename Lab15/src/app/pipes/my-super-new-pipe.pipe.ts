import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySuperNewPipe'
})
export class MySuperNewPipePipe implements PipeTransform {

  transform(value: any, someNumber?: any): any {
    for (let i = 0; i < someNumber; i++) {
      value += 'super';
    }
    return value;
  }

}
