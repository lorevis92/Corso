import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { GetMovieService } from 'src/app/service/get-movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: Movies[]= [];


  constructor(private moviesService: GetMovieService) { }

  ngOnInit(): void {
    this.moviesService.recupera().subscribe((film: Movies[]) => {
      this.movies = film;
      console.log(this.movies);
    })
  }
}
