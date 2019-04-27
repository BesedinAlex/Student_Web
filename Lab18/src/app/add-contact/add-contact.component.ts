import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  form: FormGroup;

  constructor(
    private contacts: ContactsService
  ) { }

  // await this.addContact({firstName: 'Andrey', lastName: 'Sidorov', phoneNumber: '+71110000001', favorite: false});
  async addContact(data) {
    let result;
    let id = 0;
    do {
      // @ts-ignore
      result = this.contacts.data.find( obj => obj.id === id);
      id++;
    } while (result !== undefined);
    data.id = id - 1;
    await this.contacts.addContact(data);
  }

}

interface Contact {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  favorite: boolean;
  comment: string;
}
