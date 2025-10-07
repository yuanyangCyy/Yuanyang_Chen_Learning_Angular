import { Injectable } from '@angular/core';
import { Movie } from '../Shared/Models/movie';
import { movieList } from '../Shared/Models/mockMovie.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = movieList;

  constructor() { }

  // Read all movies
  getMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  // Create (Add) new movie
  addMovie(newMovie: Movie): Observable<Movie[]> {
    this.movies.push(newMovie);
    return of(this.movies);
  }

  // Update existing movie
  updateMovie(updatedMovie: Movie): Observable<Movie[]> {
    const index = this.movies.findIndex(m => m.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
    }
    return of(this.movies);
  }

  // Delete movie by ID
  deleteMovie(id: number): Observable<Movie[]> {
    this.movies = this.movies.filter(m => m.id !== id);
    return of(this.movies);
  }

  // Read a single movie by ID
  getMovieById(id: number): Observable<Movie | undefined> {
    const movie = this.movies.find(m => m.id === id);
    return of(movie);
  }
}
