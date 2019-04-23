import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-main-page',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: [];

  constructor(
    private db: DatabaseService
  ) { }

  async ngOnInit() {
    try {
      const contacts = this.db.getData('contacts');
      this.contacts = (isNullOrUndefined(await contacts)) ? [] : await contacts;
      console.log(this.contacts);
    } catch (err) {
      console.log(err);
    }
  }

}
