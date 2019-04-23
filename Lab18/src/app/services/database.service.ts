import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl = 'http://localhost:3000/';
  options: HttpHeaders;

  constructor(public http: HttpClient) {
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json');
  }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  private get(url: string = '', header: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: header
    };
    return this.http.get(this.getUrl(url), requestOptions);
  }

  private post(url: string = '', data, header: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: header
    };
    return this.http.post(this.getUrl(url), data, requestOptions);
  }

  private put(url: string = '', data: any = {}, header: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: header
    };
    return this.http.put(this.getUrl(url), data, requestOptions);
  }

  private delete(url: string = '', header: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: header
    };
    return this.http.delete(this.getUrl(url), requestOptions);
  }

  async getData(url) {
    return this.get(url, this.options).toPromise();
  }

  async postData(url, data) {
    return this.post(url, data, this.options).toPromise();
  }

  async putDataById(url, id, data) {
    return this.put(url + '/' + id, data, this.options).toPromise();
  }

  async deleteDataById(url, id) {
    return this.delete(url + '/' + id, this.options).toPromise();
  }
}
