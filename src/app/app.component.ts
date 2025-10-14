import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from './Shared/Models/movie';

import { MovieService } from './Services/movie.service';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'yuanyang-chen-learning-angular';
  featuredMovie: Movie | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieById(2).subscribe(movie => {
      this.featuredMovie = movie ?? null;
    });
  }
}
