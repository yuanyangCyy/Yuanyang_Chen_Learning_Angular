import { Routes } from '@angular/router';
import { MovieList } from './movie-list/movie-list';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieList },
  { path: 'modify', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];
