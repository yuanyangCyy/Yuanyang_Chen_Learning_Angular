import {Component, Input} from '@angular/core';
import {Movie} from '../Shared/Models/movie';
import {MovieListItem} from '../movie-list-item/movie-list-item';

@Component({
  selector: 'app-movie-list',
  imports: [
    MovieListItem
  ],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  @Input() movie!:Movie;
  movies: any;

}
