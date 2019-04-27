import {Injectable} from '@angular/core';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends DatabaseService {

  data: [];
  done: boolean;
  private dataIsLoaded = false;

  async getContacts() {
    try {
      this.data = await this.getData('contacts');
      this.dataIsLoaded = true;
    } catch (err) {
      alert('Unable to access database. Try again.');
    }
  }

  async addContact(data) {
    this.done = false;
    if (this.dataIsLoaded) {
      try {
        await this.postData('contacts', data);
        await this.getContacts();
        this.done = true;
      } catch (err) {
        alert('Connection to database was lost. Trying to reconnect again.');
        await this.getContacts();
      }
    } else {
      await this.getContacts();
      if (this.data !== undefined) {
        await this.addContact(data);
      }
    }
  }

  async editContact(id, data) {
    this.done = false;
    try {
      await this.putData('contacts', id, data);
      await this.getContacts();
      this.done = true;
    } catch (err) {
      alert('Connection to database was lost. Trying to reconnect again.');
      await this.getContacts();
    }
  }

  async deleteContact(id) {
    this.done = false;
    try {
      await this.deleteData('contacts', id);
      await this.getContacts();
      this.done = true;
    } catch (err) {
      alert('Connection to database was lost. Trying to reconnect again.');
      await this.getContacts();
    }
  }

}
