import { Injectable } from '@angular/core';
import { ContentService } from './content.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PostsService extends ContentService {
  constructor(public http: HttpClient) {
    super(http, 'posts');
  }
}
