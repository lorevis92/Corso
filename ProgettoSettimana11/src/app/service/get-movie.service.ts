import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Movies } from '../models/movies.interface';
import { environment } from 'src/environments/environment';
import { Favorites } from '../models/favorites.interface';

@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }
  recupera (){
    return this.http.get<Movies[]>(`${this.baseURL}movies-popular`)
  }

  aggiungiFavorito(favorito: Favorites) {
    return this.http.post(`${this.baseURL}favorites`, favorito);
}

  recuperaFavoriti(userId: number) {
    return this.http.get<Favorites[]>(`${this.baseURL}favorites?userId=${userId}`);
  }

  rimuoviFavorito(favoritoId: number) {
    return this.http.delete(`${this.baseURL}favorites/${favoritoId}`);
}

}
