import {Component} from '@angular/core';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(
    private contacts: ContactsService
  ) { }

}
