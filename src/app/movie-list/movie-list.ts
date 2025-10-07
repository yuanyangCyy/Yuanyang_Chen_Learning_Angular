import { Component, OnInit } from '@angular/core';
import { Movie } from '../Shared/Models/movie';
import { MovieListItem } from '../movie-list-item/movie-list-item';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieListItem],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieList implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {

    this.movieService.getMovies().subscribe((list: Movie[]) => {
      this.movies = list;
    });
  }
}
