import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonService } from './json.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends JsonService {

  options: HttpHeaders;

  constructor(public http: HttpClient) {
    super(http);
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json');
  }

  async getData() {
    return this.get('users', this.options).toPromise();
  }

  async postData(data) {
    return this.post('users', data, this.options).toPromise();
  }

  async putDataById(id, data) {
    return this.put('users/' + id, data, this.options).toPromise();
  }

  async deleteDataById(id) {
    return this.delete('users/' + id, this.options).toPromise();
  }
}
