import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  ) {
    this.form = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      phoneNumber: new FormControl(null, [Validators.required]),
      favorite: new FormControl(false),
      comment: new FormControl(null)
    });
  }

  async addContact() {
    const data = this.form.value;
    let result;
    let id = -1;
    do {
      id++;
      // @ts-ignore
      result = this.contacts.data.find(obj => obj.id === id);
    } while (result !== undefined);
    data.id = id;
    await this.contacts.addContact(data);
  }

}
