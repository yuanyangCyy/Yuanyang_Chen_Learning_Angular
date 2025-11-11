export interface Movie{
  id: number;
  title: string;
  director: string;
  year: number;
  rating?: number;
  inTheaters: boolean;
  image: string;
  releaseDate?: string;
  price?: number;

}
