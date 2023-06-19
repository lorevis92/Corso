import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Posts } from '../interface/posts.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GetPostsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  recupera (){
    return this.http.get<Posts[]>(`${this.baseUrl}posts`)
  }
  cancella (id: number){
    return this.http.delete(`${this.baseUrl}${id}`);
  }
  recuperaById (id: number){
    return this.http.get<Posts[]>(`${this.baseUrl}posts?id=${id}`)
  }
}
