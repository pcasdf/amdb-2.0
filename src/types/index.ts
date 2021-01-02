export interface Categories {
  MOVIE: 'movie';
  TV: 'tv';
}

export type CategoryKey = keyof Categories;
export type Category = Categories[CategoryKey];
