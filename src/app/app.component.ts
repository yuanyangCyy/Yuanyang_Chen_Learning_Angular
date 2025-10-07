import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from './Shared/Models/movie';
import { MovieList } from './movie-list/movie-list';
import { MovieService } from './Services/movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MovieList],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'yuanyang-chen-learning-angular';
  featuredMovie: Movie | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieById(2).subscribe(movie => {
      this.featuredMovie = movie ?? null;
    });
  }
}
