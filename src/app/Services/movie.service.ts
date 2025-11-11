import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Shared/Models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'api/movies';

  constructor(private http: HttpClient) {}

  // Read all movies
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  // Read one movie by ID
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  // Create (Add) new movie
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, newMovie);
  }

  // Update existing movie
  updateMovie(updatedMovie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${updatedMovie.id}`, updatedMovie);
  }

  // Delete movie by ID
  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
