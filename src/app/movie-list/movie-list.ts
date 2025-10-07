import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../Shared/Models/movie';
import { MovieListItem } from '../movie-list-item/movie-list-item';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieListItem],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieList implements OnInit {
  movies: Movie[] = []; // will hold all movies

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {

    this.movieService.getMovies().subscribe((list: Movie[]) => {
      this.movies = list;
    });
  }
}
