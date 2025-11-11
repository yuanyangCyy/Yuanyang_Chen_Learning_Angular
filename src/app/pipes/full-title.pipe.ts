import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Shared/Models/movie';

@Pipe({
  name: 'fullTitle',
  standalone: true
})
export class FullTitlePipe implements PipeTransform {

  transform(movie: Movie): string {
    return `${movie.title} (${movie.year})`;
  }
}
