import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Movie} from './models/movie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'yuanyang-chen-learning-angular';

  studentName: string = 'Yuanyang Chen';
  age: number = 27;

  movies: Movie[] = [
    {
      id: 1,
      title: 'The Battle at Lake Chanjin ',
      director: "Chen Kaige",
      year: 2021,
      inTheaters: false
    },

    {
      id: 2,
      title: "No More Bets",
      director: "Shen Ao",
      year: 2023,
      inTheaters: false
    },

    {
      id: 3,
      title: "YOLO",
      director: "Jia Ling",
      year: 2023,
      inTheaters: false
    },
    {
      id: 4,
      title: "The Wandering Earth 2",
      director: "Frant Guo",
      year: 2023,
      inTheaters: false
    },
    {
      id: 5,
      title: "Thunderbolts",
      director: "Jacob Stacey Schreier",
      year: 2025,
      inTheaters: false
    },
    {
      id: 6,
      title: "FreeFall",
      director: "Oleg Urazaykin",
      year: 2025,
      inTheaters: false
    }
  ]
}
