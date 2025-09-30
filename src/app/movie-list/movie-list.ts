import { Component } from '@angular/core';
import { Movie } from '../Shared/Models/movie';
import { MovieListItem } from '../movie-list-item/movie-list-item';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieListItem],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieList {
  movies: Movie[] = [
    { id: 1, title: 'The Battle at Lake Changjin', director: 'Chen Kaige', year: 2021, inTheaters: false },
    { id: 2, title: 'Inception', director: 'Christopher Nolan', year: 2010, inTheaters: false },
    { id: 3, title: 'Parasite', director: 'Bong Joon-ho', year: 2019, inTheaters: false },
    { id: 4, title: 'Avatar: The Way of Water', director: 'James Cameron', year: 2022, inTheaters: true },
    { id: 5, title: 'Interstellar', director: 'Christopher Nolan', year: 2014, inTheaters: false }
  ];
}
