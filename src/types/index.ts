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
  NOT_LOADED: 'NOT_LOADED';
}

export interface Result {
  title: string;
  vote_count: number;
  vote_average: number;
  media_type: string;
  id: number;
  overview: string;
  poster_path: string;
}
