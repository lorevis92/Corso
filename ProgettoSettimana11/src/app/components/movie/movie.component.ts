import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { GetMovieService } from 'src/app/service/get-movie.service';
import { GetFavoritesService } from 'src/app/service/get-favorites.service';
import { Favorites } from 'src/app/models/favorites.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: Movies[]= [];
  favorites: Favorites[] = [];

  constructor(private moviesService: GetMovieService, private favoriteSrv: GetFavoritesService) { }

  ngOnInit(): void {
    this.moviesService.recupera().subscribe((film: Movies[]) => {
      this.movies = film;
      console.log(this.movies);
    })
    this.favoriteSrv.recupera().subscribe((favoriti: Favorites[]) => {
      this.favorites = favoriti;
      console.log(this.favorites);
    })
  }
}
