import {combineReducers} from '@reduxjs/toolkit';
import trendingReducer from '../slices/trendingSlice';

const rootReducer = combineReducers({
  trending: trendingReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
