import {Categories, LoadingStatuses} from '../types';

export const CATEGORIES: Categories = {
  MOVIE: 'movie',
  TV: 'tv'
};

const {MOVIE, TV} = CATEGORIES;

export const TRENDING_TYPES = {
  [MOVIE]: 'Movies',
  [TV]: 'TV Series'
};

export const LOADING_STATUSES: LoadingStatuses = {
  NOT_LOADED: 'NOT_LOADED',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
  SUCCESS: 'SUCCESS'
};
