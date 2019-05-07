import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../services/contacts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  form: FormGroup;
  mask = [/\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private router: Router,
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
    await this.contacts.addContact(this.form.value);
    if (this.contacts.lastActionIsDone) {
      this.router.navigate(['/']);
    }
  }

}
