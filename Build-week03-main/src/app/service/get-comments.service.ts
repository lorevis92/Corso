import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Comments } from '../interface/comments.interface';
import { environment } from 'src/environments/environment';


export class GetCommentsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  recupera (){
    return this.http.get<Comments[]>(`${this.baseUrl}comments`)
  }
}
