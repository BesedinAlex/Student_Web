import {Component, OnInit} from '@angular/core';
import {ContactsService} from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private contacts: ContactsService
  ) { }

  async ngOnInit() {
    if (!this.contacts.dataIsLoaded) {
      await this.contacts.getContacts();
    }
  }

}
