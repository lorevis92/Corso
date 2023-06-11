import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Favorites } from '../models/favorites.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetFavoritesService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }
  recupera (){
    return this.http.get<Favorites[]>(`${this.baseURL}favorites`)
  }

}
