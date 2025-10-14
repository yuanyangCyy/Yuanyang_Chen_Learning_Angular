import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <a routerLink="/movies">Back to Movie List</a>
  `
})
export class PageNotFoundComponent {}
