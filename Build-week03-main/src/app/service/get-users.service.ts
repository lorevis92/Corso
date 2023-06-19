import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from '../interface/users.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GetUsersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  recupera (){
    return this.http.get<Users[]>(`${this.baseUrl}users`)
  }
  recuperaById (id:number){
    return this.http.get<Users[]>(`${this.baseUrl}users?id=${id}`)
  }
  recuperaByMail (mail:string){
    return this.http.get<Users[]>(`${this.baseUrl}users?email=${mail}`)
  }
}
