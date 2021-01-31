import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = environment.baseURL;

  constructor(private http: HttpClient) { }
  public getAllComments(): Observable<any>{
    return this.http.get
    (this.url + 'comments');
  }

  public getAllTodos(): Observable<any>{
    return this.http.get
    (this.url + 'todos');
  }
}
