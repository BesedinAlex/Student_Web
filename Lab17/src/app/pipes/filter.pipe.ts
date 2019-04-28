import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts, args: [number, string]) {
    switch (args[0]) {
      case 0: // From Newest
        contacts.sort((a, b) => (a.id > b.id) ? -1 : 1);
        break;
      case 1: // From Oldest
        contacts.sort((a, b) => (a.id <= b.id) ? -1 : 1);
        break;
    }
    if (args[1] === '') {
      return contacts;
    }
    return contacts.filter(obj => this.search(obj, args[1]));
  }

  search(obj, arg) {
    const firstName = obj.firstName.toLowerCase().search(arg.toLowerCase()) === 0;
    const lastName = obj.lastName.toLowerCase().search(arg.toLowerCase()) === 0;
    const phoneNumber = obj.phoneNumber.search(arg) >= 0;
    return firstName || lastName || phoneNumber;
  }

}
