import {Component, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Output} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  @Output() contact = new EventEmitter<{
    firstName: string,
    lastName: string,
    phoneNumber: string,
    favorite: string,
    comment: string
  }>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      phoneNumber: new FormControl(null, [Validators.required]),
      favorite: new FormControl(false),
      comment: new FormControl(null),
    });
  }

  addContact() {
    this.contact.emit({
      ...this.form.value
    });
  }

}

interface Contact {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  favorite: boolean;
  comment: string;
}
