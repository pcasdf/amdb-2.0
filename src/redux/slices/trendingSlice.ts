import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category, LoadingStatuses} from '../../types';

interface Trending {
  type: Category;
}

type LoadingStatus = keyof LoadingStatuses;
type Results = any[];

type ResultsPayload = {
  results: any[];
} & Trending;

interface TrendingState {
  movie: {results: Results; loadingStatus: LoadingStatus};
  tv: {results: Results; loadingStatus: LoadingStatus};
}

const initialState: TrendingState = {
  movie: {results: [], loadingStatus: 'NOT_LOADED'},
  tv: {results: [], loadingStatus: 'NOT_LOADED'}
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<ResultsPayload>) => {
      const {type, results} = action.payload;
      state[type] = {
        loadingStatus: 'SUCCESS',
        results
      };
    },
    setStatusPending: (state, action: PayloadAction<Trending>) => {
      const {type} = action.payload;
      state[type].loadingStatus = 'PENDING';
    },
    setStatusFailed: (state, action: PayloadAction<Trending>) => {
      const {type} = action.payload;
      state[type].loadingStatus = 'FAILED';
    }
  }
});

export const {setResults, setStatusPending, setStatusFailed} = trendingSlice.actions;
export default trendingSlice.reducer;
