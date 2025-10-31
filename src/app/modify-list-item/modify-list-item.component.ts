import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Shared/Models/movie';

import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  // use ReactiveFormsModule
  imports: [ReactiveFormsModule],
  template: `
    <h2>Modify Movie</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>ID:</label>
      <input type="number" formControlName="id"><br>

      <label>Title:</label>
      <input type="text" formControlName="title"><br>

      <label>Genre:</label>
      <input type="text" formControlName="genre"><br>

      <label>Year:</label>
      <input type="text" formControlName="year"><br>

      <button type="submit" [disabled]="form.invalid">Update Movie</button>
    </form>
  `
})
export class ModifyListItemComponent implements OnInit {

  // 1
  form!: FormGroup;

  //  FormBuilder and Service
  constructor(private fb: FormBuilder, private movieService: MovieService,private route: ActivatedRoute,
              private router: Router) {
    //
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      genre: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.movieService.getMovieById(id).subscribe((movie: Movie | undefined) => {
          if (movie) {
            this.form.patchValue(movie);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const movie: Movie = this.form.value;
      this.movieService.updateMovie(movie).subscribe(() => {
        alert('Movie updated successfully!');
        this.router.navigate(['/movies']);
        this.form.reset();
      });
    }
  }
}
