import {Component, Input} from '@angular/core';
import {Movie} from '../Shared/Models/movie';

@Component({
  selector: 'app-movie-list-item',
  imports: [],
  templateUrl: './movie-list-item.html',
  styleUrl: './movie-list-item.css'
})
export class MovieListItem {
  @Input() movie!: Movie;

}
