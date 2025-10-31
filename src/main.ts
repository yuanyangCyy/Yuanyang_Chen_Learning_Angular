import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

import { MovieList } from './app/movie-list/movie-list';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieList },
  { path: 'modify', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    ]

});
