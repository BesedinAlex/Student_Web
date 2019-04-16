import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appMonthFilter'
})
export class AppMonthFilterPipe implements PipeTransform {

  transform(monthList, searchStr: string) {
    if (monthList.lenght === 0 || searchStr === '') {
      return monthList;
    }
    return monthList.filter(month => month.name.search(searchStr.toLocaleLowerCase()) === 0);
  }
}
