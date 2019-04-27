import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private contacts: ContactsService
  ) { }

  async ngOnInit() {
    // await this.editContact({firstName: 'Andrey', lastName: 'Sidorov', phoneNumber: '+71110000001', favorite: false, id: 2});
  }

  async editContact(data) {
    // await this.contacts.editContact(data);
  }

}
