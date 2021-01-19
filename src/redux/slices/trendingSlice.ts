import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Category, LoadingStatuses} from '../../types';
import {LOADING_STATUSES} from '../../constants';

const {NOT_LOADED, PENDING, FAILED, SUCCESS} = LOADING_STATUSES;

type LoadingStatus = keyof LoadingStatuses;
type Results = any[];

interface ResultsPayload {
  results: any[];
  type: Category;
}

export interface TrendingState {
  movie: {results: Results; loadingStatus: LoadingStatus};
  tv: {results: Results; loadingStatus: LoadingStatus};
}

const initialState: TrendingState = {
  movie: {results: [], loadingStatus: NOT_LOADED},
  tv: {results: [], loadingStatus: NOT_LOADED}
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    fetchTrending: (state, action: PayloadAction<Category>) => {},
    setResults: (state, action: PayloadAction<ResultsPayload>) => {
      const {type, results} = action.payload;
      state[type] = {
        loadingStatus: SUCCESS,
        results
      };
    },
    setStatusPending: (state, action: PayloadAction<Category>) => {
      const type = action.payload;
      state[type].loadingStatus = PENDING;
    },
    setStatusFailed: (state, action: PayloadAction<Category>) => {
      const type = action.payload;
      state[type].loadingStatus = FAILED;
    }
  }
});

export const {fetchTrending, setResults, setStatusPending, setStatusFailed} = trendingSlice.actions;
export default trendingSlice.reducer;
