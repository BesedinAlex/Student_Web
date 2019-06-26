import { Injectable } from '@angular/core';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService extends DatabaseService {

  data: [];
  lastActionIsDone: boolean;
  private dataIsLoaded = false;

  async getDevices() {
    try {
      this.data = await this.getData('devices');
      this.dataIsLoaded = true;
    } catch (err) {
      alert('Unable to access database. Try again.');
    }
  }

  async addDevice(data) {
    this.lastActionIsDone = false;
    if (this.dataIsLoaded) {
      try {
        await this.postData('devices', data);
        await this.getDevices();
        this.lastActionIsDone = true;
      } catch (err) {
        alert('Connection to database was lost. Trying to reconnect again.');
        await this.getDevices();
      }
    } else {
      await this.getDevices();
      if (this.data !== undefined) {
        await this.addDevice(data);
      }
    }
  }

}
