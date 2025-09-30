import { Component } from '@angular/core';

import type { Movie } from './Shared/Models/movie';
import {MovieList} from './movie-list/movie-list';

@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',
  imports: [
    MovieList
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'yuanyang-chen-learning-angular';

  movie1: Movie = { id: 1, title: 'The Battle at Lake Changjin', director: 'Chen Kaige', year: 2021, inTheaters: false };
  movie2: Movie = { id: 2, title: 'Inception',                 director: 'Christopher Nolan', year: 2010, inTheaters: false };
  movie3: Movie = { id: 3, title: 'Parasite',                  director: 'Bong Joon-ho',      year: 2019, inTheaters: false };
  movie4: Movie = { id: 4, title: 'Avatar: The Way of Water',  director: 'James Cameron',     year: 2022, inTheaters: true };
  movie5: Movie = { id: 5, title: 'Interstellar',              director: 'Christopher Nolan', year: 2014, inTheaters: false };

  movieList: Movie[] = [this.movie1, this.movie2, this.movie3, this.movie4, this.movie5];
}
