import {Injectable} from '@angular/core';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends DatabaseService {

  data: [];
  dataIsLoaded = false;

  async getContacts() {
    try {
      this.data = await this.getData('contacts');
      this.dataIsLoaded = true;
    } catch (err) {
      alert('Contacts weren\'t loaded.');
    }
  }

  async addContact(data) {
    try {
      // @ts-ignore
      this.data.push(data);
      await this.postData('contacts', data);
    } catch (err) {
      alert('Contact wasn\'t added.');
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
