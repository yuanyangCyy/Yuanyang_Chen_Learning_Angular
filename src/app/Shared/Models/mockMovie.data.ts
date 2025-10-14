import { Movie } from './movie';


export const movieList: Movie[] = [
  {
    id: 1,
    title: 'The Battle at Lake Changjin',
    director: 'Chen Kaige',
    year: 2021,
    inTheaters: false,
    image: '../assets/lackechangjin.jpeg'
  },
  {
    id: 2,
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    inTheaters: false,
    image: '../assets/inception.jpeg'
  },
  {
    id: 3,
    title: 'Parasite',
    director: 'Bong Joon-ho',
    year: 2019,
    inTheaters: false,
    image: 'assets/parasite.jpeg'
  },
  {
    id: 4,
    title: 'Avatar: The Way of Water',
    director: 'James Cameron',
    year: 2022,
    inTheaters: true,
    image: 'assets/avatar2.jpeg'
  },
  {
    id: 5,
    title: 'Interstellar',
    director: 'Christopher Nolan',
    year: 2014,
    inTheaters: false,
    image: 'assets/interstellar.jpeg'
  }
];
