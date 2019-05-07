import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../services/contacts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  form: FormGroup;
  id: number;
  contact;
  mask = [/\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private router: Router,
    private contacts: ContactsService,
    private currentRoute: ActivatedRoute
  ) {
    this.currentRoute.params.subscribe(param => this.id = param.id);
  }

  ngOnInit() {
    try {
      // @ts-ignore
      this.contact = this.contacts.data.find(contact => contact.id === +this.id);
    } catch (error) {
      this.router.navigate(['/']);
    }
    this.form = new FormGroup({
      firstName: new FormControl(this.contact.firstName),
      lastName: new FormControl(this.contact.lastName),
      phoneNumber: new FormControl(this.contact.phoneNumber, [Validators.required]),
      favorite: new FormControl(this.contact.favorite),
      comment: new FormControl(this.contact.comment)
    });
  }

  async editContact() {
    await this.contacts.editContact(+this.id, this.form.value);
    if (this.contacts.lastActionIsDone) {
      this.router.navigate(['/']);
    }
  }

  async deleteContact() {
    if (confirm('Are you sure you want to delete this contact?')) {
      await this.contacts.deleteContact(+this.id);
      if (this.contacts.lastActionIsDone) {
        this.router.navigate(['/']);
      }
    }
  }

}
