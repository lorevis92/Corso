import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { GetMovieService } from 'src/app/service/get-movie.service';
import { GetFavoritesService } from 'src/app/service/get-favorites.service';
import { Favorites } from 'src/app/models/favorites.interface';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-azione',
  templateUrl: './azione.component.html',
  styleUrls: ['./azione.component.scss']
})
export class AzioneComponent implements OnInit {
  filmAzione: (Movies)[] = [];
  movies: Movies[] = [];
  favorites: Favorites[] = [];
  user: User[] = [];
  indexUserById: number = 0;
  loggedInUserId: number = Number(localStorage.getItem('id'));
  usersFavorites: (Favorites | undefined)[] = [];
  usersFavoritesMovies: (number | undefined)[] = [];


  constructor(private moviesService: GetMovieService, private favoriteSrv: GetFavoritesService) { }

  ngOnInit(): void {
    this.moviesService.recupera().subscribe((film: Movies[]) => {
      this.movies = film;
      this.filmAzione = this.movies.filter(film => film.genre_ids.includes(28))
      //console.log(this.filmAzione);
    })
    this.favoriteSrv.recupera().subscribe((favoriti: Favorites[]) => {
      this.favorites = favoriti;

      //console.log(this.favorites);
      this.usersFavorites = this.favorites.filter(fav => fav.userId == this.loggedInUserId),
      this.usersFavoritesMovies = this.usersFavorites.map(e => e?.movieId);
      //console.log(this.usersFavoritesMovies);
    })
  }
  film2localStorage(id: number | undefined){
    localStorage.setItem("filmId", String(id))
  }
}
