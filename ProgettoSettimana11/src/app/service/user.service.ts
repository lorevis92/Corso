import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
  recupera (){
    return this.http.get<User[]>('http://localhost:4201/users');
  }

  newUser(newUser: Partial<User>){
    return this.http.post<User>('http://localhost:4201/users', newUser);
  }
}
