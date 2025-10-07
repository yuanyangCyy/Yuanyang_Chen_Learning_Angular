import { Component } from '@angular/core';
import { Movie } from '../Shared/Models/movie';
import { MovieListItem } from '../movie-list-item/movie-list-item';
import { movieList} from '../Shared/Models/mockMovie.data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieListItem],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieList {
  movies: Movie[] = movieList;
}
