import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JsonService {

	constructor(public http: HttpClient) { }

	private getUrl(url: string = ''): string {
		return url;
	}

	get(url: string = '', header: HttpHeaders): Observable<any> {
		let requestOptions = {
			headers: header
		};
		return this.http.get(this.getUrl(url), requestOptions);
	}

	post(url: string = '', data, header: HttpHeaders): Observable<any> {
		let requestOptions = {
			headers: header
		};
		return this.http.post(this.getUrl(url), data, requestOptions);
	}

	put(url: string = '', data: any = {}, header: HttpHeaders): Observable<any> {
		let requestOptions = {
			headers: header
		};
		return this.http.put(this.getUrl(url), data, requestOptions);
	}

	delete(url: string = '', header: HttpHeaders): Observable<any> {
		let requestOptions = {
			headers: header
		};
		return this.http.delete(this.getUrl(url), requestOptions);
	}
}
