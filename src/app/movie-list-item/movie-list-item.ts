import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Shared/Models/movie';

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  templateUrl: './movie-list-item.html',
  styleUrl: './movie-list-item.css'
})
export class MovieListItem {
  @Input() movie!: Movie;

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(): void {
    this.edit.emit(this.movie.id);
  }

  onDelete(): void {
    this.delete.emit(this.movie.id);
  }
}
