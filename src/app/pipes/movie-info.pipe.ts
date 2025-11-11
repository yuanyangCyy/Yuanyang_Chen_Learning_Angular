import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Shared/Models/movie';

@Pipe({
  name: 'movieInfo',
  standalone: true
})
export class MovieInfoPipe implements PipeTransform {
  transform(movie: Movie): string {
    return `${movie.title} (${movie.year}) - Directed by ${movie.director}`;
  }
}
