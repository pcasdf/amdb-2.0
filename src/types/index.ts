export interface Categories {
  MOVIE: 'movie';
  TV: 'tv';
}

export type CategoryKey = keyof Categories;
export type Category = Categories[CategoryKey];

export interface LoadingStatuses {
  PENDING: 'PENDING';
  FAILED: 'FAILED';
  SUCCESS: 'SUCCESS';
}
