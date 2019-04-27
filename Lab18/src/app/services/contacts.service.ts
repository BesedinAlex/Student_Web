import {Injectable} from '@angular/core';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends DatabaseService {

  data: [];
  contactAddedSuccessfully: boolean;
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
    this.contactAddedSuccessfully = false;
    if (this.dataIsLoaded) {
      try {
        await this.postData('contacts', data);
        // @ts-ignore
        this.data.push(data);
        await this.getContacts();
        this.contactAddedSuccessfully = true;
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

  // async editContact(data) {
  //   try {
  //     await this.putData('contacts', data.id, data);
  //   } catch (err) {
  //     alert('Contact wasn\'t changed.');
  //   }
  // }

}
