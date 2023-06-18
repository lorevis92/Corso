import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { GetMovieService } from 'src/app/service/get-movie.service';
import { GetFavoritesService } from 'src/app/service/get-favorites.service';
import { Favorites } from 'src/app/models/favorites.interface';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  movies: Movies[]= [];
  favorites: Favorites[] = [];
  user: User[] = [];
  indexUserById: number = 0;
  loggedInUserId: number = Number(localStorage.getItem('id'));
  usersFavorites: (Favorites | undefined)[] = [];
  usersFavoritesMovies: (number | undefined)[] = [];
  favoriteMoviesCard: Movies[] = [];


  constructor(private moviesService: GetMovieService, private favoriteSrv: GetFavoritesService) { }

    ngOnInit(): void {
      this.moviesService.recupera().subscribe((film: Movies[]) => {
        this.movies = film;
        //console.log(this.movies);
      })
      this.favoriteSrv.recupera().subscribe((favoriti: Favorites[]) => {
        this.favorites = favoriti;
        this.usersFavorites = this.favorites.filter(fav => fav.userId == this.loggedInUserId);
        this.usersFavoritesMovies = this.usersFavorites.map(e => e?.movieId);
        this.favoriteMoviesCard = this.movies.filter(fav => this.usersFavoritesMovies.includes(fav.id))
      })
    }
    film2localStorage(id: number | undefined){
      localStorage.setItem("filmId", String(id))
    }
    aggiungiFavorito(idFilm: number | undefined): void {
      const favorito: Favorites = {
          userId: this.loggedInUserId,
          movieId: idFilm,
      };
      this.moviesService.aggiungiFavorito(favorito).subscribe(() => {
        this.favoriteSrv.recupera().subscribe((favoriti: Favorites[]) => {
          this.favorites = favoriti;

          console.log(this.favorites);
          this.usersFavorites = this.favorites.filter(fav => fav.userId == this.loggedInUserId),
          this.usersFavoritesMovies = this.usersFavorites.map(e => e?.movieId);
          console.log(this.usersFavoritesMovies);
        }
    );
  })}

    eliminaFavorito(filmId: number | undefined): void {
      const idFav = this.getIdFavorito(filmId);
      if (idFav) {
          this.moviesService.rimuoviFavorito(idFav).subscribe(() => {
            this.favoriteSrv.recupera().subscribe((favoriti: Favorites[]) => {
              this.favorites = favoriti;

              console.log(this.favorites);
              this.usersFavorites = this.favorites.filter(fav => fav.userId == this.loggedInUserId),
              this.usersFavoritesMovies = this.usersFavorites.map(e => e?.movieId);
              console.log(this.usersFavoritesMovies);
            }
        );
      });
      }
    }

    getIdFavorito(filmId: number | undefined): number | undefined {
      const favorito = this.favorites.find((f) => f.movieId === filmId);
      return favorito?.id;
  }
  }

