import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'yuanyang-chen-learning-angular';

  studentName: string = 'Yuanyang Chen';
  age: number = 27;
}
