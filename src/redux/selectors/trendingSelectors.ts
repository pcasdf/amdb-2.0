import {Category} from '../../types';
import {RootState} from '../reducers';

export const getTrendingState = (state: RootState) => state.trending;
export const getTrendingMovies = (state: RootState) => state.trending.movie;
export const getTrendingTv = (state: RootState) => state.trending.tv;
export const getTrendingResults = (state: RootState, type: Category) => state.trending[type];
