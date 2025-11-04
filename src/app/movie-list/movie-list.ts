import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../Shared/Models/movie';
import { MovieService } from '../Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieList implements OnInit {
  movies: Movie[] = []; // will hold all movies
  errorMessage = '';

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {

    this.movieService.getMovies().subscribe({
      next: (list: Movie[]) => {
        this.movies = list;
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Error loading movies:', err);
        this.errorMessage = 'Failed to load movies. Please try again later.';
      }
    });
  }

  editMovie(id: number): void {
    this.router.navigate(['/modify'], { queryParams: { id } });
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id).subscribe({
      next: () => {
        this.movies = this.movies.filter(m => m.id !== id);
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Error deleting movie:', err);
        this.errorMessage = 'Delete failed. Please try again.';
      }
    });
  }
}
