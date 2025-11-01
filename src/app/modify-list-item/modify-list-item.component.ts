import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Shared/Models/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modify-list-item.component.html'
})
export class ModifyListItemComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      genre: ['', Validators.required],
      year: ['', Validators.required]
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
      const existing = this.movieService['movies'].find(m => m.id === movie.id);

      if (existing) {
        this.movieService.updateMovie(movie).subscribe(() => {
          alert('Movie updated successfully!');
          this.router.navigate(['/movies']);
        });
      } else {
        this.movieService.addMovie(movie).subscribe(() => {
          alert('Movie added successfully!');
          this.router.navigate(['/movies']);
        });
      }
    }
  }
}
