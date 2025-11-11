import { Routes } from '@angular/router';
import { MovieList } from './movie-list/movie-list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  // Eager Loaded
  { path: '', redirectTo: '/movies', pathMatch: 'full' },

  // MovieList
  { path: 'movies', component: MovieList },

  // ModifyListItemComponent 改为 Lazy Load
  {
    path: 'modify',
    loadComponent: () => import('./modify-list-item/modify-list-item.component')
      .then(m => m.ModifyListItemComponent)
  },

  // 404
  { path: '**', component: PageNotFoundComponent }
];
