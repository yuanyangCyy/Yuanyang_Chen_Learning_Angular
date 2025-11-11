import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../Shared/Models/movie';

export class InMemoryDataService implements InMemoryDbService {
  // returns an object with a movies property,
  // which is an array of Movie objects
  createDb(): { movies: Movie[] } {
    const movies: Movie[] = [
      {
        id: 1,
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        rating: 9.0,
        inTheaters: false,
        image: '../assets/images/1.jpg',
        releaseDate: '2010-07-16',
        price: 12.99
      },
      {
        id: 2,
        title: 'Avatar: The Way of Water',
        year: 2022,
        director: 'James Cameron',
        rating: 8.5,
        inTheaters: true,
        image: 'assets/images/2.jpg',
        releaseDate: '2022-12-16',
        price: 18.5
      },
      {
        id: 3,
        title: 'Interstellar',
        year: 2014,
        director: 'Christopher Nolan',
        rating: 8.6,
        inTheaters: false,
        image: 'assets/images/3.jpg',
        releaseDate: '2014-11-07',
        price: 15.0
      },
      {
        id: 4,
        title: 'Oppenheimer',
        year: 2023,
        director: 'Christopher Nolan',
        rating: 8.7,
        inTheaters: true,
        image: 'assets/images/4.jpg',
        releaseDate: '2023-07-21',
        price: 20.0
      }
    ];

    return {movies};
  }
}
