import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'; // serve per la gestione del Token
import { tap } from 'rxjs/operators';
import { AuthData } from './auth-data.interface'; // devo impostare io l'interface in maniera tale che sia fatta su misura per il User nell'Api che utilizzo
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router'
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  baseURL = environment.baseURL;
  private authSubj = new BehaviorSubject <null | AuthData>(null);
  utente!: AuthData;
  user$ = this.authSubj.asObservable();
  timeoutLogout: any;

  constructor(private http: HttpClient, private router: Router) {

   }

   login (data: {email:string; password:string}) {
    return this.http.post<AuthData>(`${this.baseURL}login`, data).pipe(
      tap((data)=>{
        console.log(data);
        this.authSubj.next(data); // è qui che viene riempito "user" per verificare il *ngIF
        this.utente = data;
        console.log(this.utente);
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('id', String(data.user.id));
        this.autoLogout(data);
      })
    );
   }

  restore() {
    const user = localStorage.getItem('user');
    if (!user){
      return;
    }
    const userData: AuthData = JSON.parse(user);
    if (this.jwtHelper.isTokenExpired(userData.accessToken)){
      return;
    }
    this.authSubj.next(userData);
    this.autoLogout(userData);
  }

  signup (data: {name:string, mail: string, password: string}) {
    return this.http.post(`${this.baseURL}register`, data) //devo inserire i data in maniera tale che sia in accordo con lo User nella API: per esempio noi abbiamo solo name, nella lezione invece c'era nome:string e cognome:string
  }

  logout () {
    this.authSubj.next(null);
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
    if(this.timeoutLogout) {
      clearTimeout(this.timeoutLogout);
    }
  }
  autoLogout(data: AuthData) {
    const expirationDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
    const expirationMilliseconds = expirationDate.getTime() - new Date().getTime();
    this.timeoutLogout = setTimeout(() => {
      this.logout();
    }, expirationMilliseconds);
  }
}
