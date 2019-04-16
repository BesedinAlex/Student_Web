import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends BaseApi {

  options: HttpHeaders;

  constructor(public http: HttpClient, private link: string) {
    super(http);
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json');
  }

  async getData() {
    return this.get(this.link, this.options).toPromise();
  }

  async postData(data) {
    return this.post(this.link, data, this.options).toPromise();
  }

  async putDataById(id, data) {
    return this.put(this.link + '/' + id, data, this.options).toPromise();
  }

  async deleteDataById(id) {
    return this.delete(this.link + '/' + id, this.options).toPromise();
  }
}
