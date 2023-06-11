import { Injectable } from '@angular/core';
import { Genres } from '../models/genres.interface';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetGenresService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }
  recupera (){
    return this.http.get<Genres[]>(`${this.baseURL}genres`)
  }
}
