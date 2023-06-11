import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Movies } from '../models/movies.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }
  recupera (){
    return this.http.get<Movies[]>(`${this.baseURL}movies-popular`)
  }

}
