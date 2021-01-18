import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category, LoadingStatuses} from '../../types';

interface Trending {
  type: Category;
  loadingStatus: keyof LoadingStatuses;
  results?: any[];
}

const initialState = {
  movie: {results: [], loadingStatus: 'NOT_LOADED'},
  tv: {results: [], loadingStatus: 'NOT_LOADED'}
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<Trending>) => {
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
