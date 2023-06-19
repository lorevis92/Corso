import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Comments } from '../interface/comments.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GetCommentsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  recupera (id:number){
    return this.http.get<Comments[]>(`${this.baseUrl}comments?postId=${id}`)
  }

  nuovoCommento( data: {
    "postId": number,
    "name": string,
    "email": string,
    "body": string
}) {
    return this.http.post(`${this.baseUrl}register`, data);
}
}
