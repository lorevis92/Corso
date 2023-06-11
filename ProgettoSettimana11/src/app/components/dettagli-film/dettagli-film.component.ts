import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { GetMovieService } from 'src/app/service/get-movie.service';


@Component({
  selector: 'app-dettagli-film',
  templateUrl: './dettagli-film.component.html',
  styleUrls: ['./dettagli-film.component.scss']
})
export class DettagliFilmComponent implements OnInit {
  movies: Movies[]= [];
  idLocal!: number;
  constructor(private moviesService: GetMovieService) { }

  ngOnInit(): void {
    this.moviesService.recupera().subscribe((film: Movies[]) => {
      this.movies = film;
      console.log(this.movies);
    })
    this.idLocal = Number(localStorage.getItem("filmId"));
    //console.log(this.idLocal)
  }
}
