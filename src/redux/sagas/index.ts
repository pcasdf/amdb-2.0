import {PayloadAction} from '@reduxjs/toolkit';
import {put, call, all, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {Category} from '../../types';
import {fetchTrending, setResults, setStatusPending, setStatusFailed} from '../slices/trendingSlice';

const KEY = 'bada949f4005b48da2fb91c2ba013808';
const TMDB_BASE = 'https://api.themoviedb.org/3';
// const TMDB_MOVIE = 'https://api.themoviedb.org/3/movie';
// const OMDB_URL = 'https://www.omdbapi.com/?apikey=fdbaa0a9';

function* fetchData(action: PayloadAction<any>) {
  const {type} = action.payload;
  try {
    yield put(setStatusPending({type}));
    const response = yield call<any>(axios.get, [`${TMDB_BASE}/trending/${type}/week?api_key=${KEY}&page=1`]);
    yield put(setResults({type, results: response.data.results}));
  } catch (error) {
    console.error(error);
    yield put(setStatusFailed({type}));
  }
}

function* fetchTrendingSaga() {
  yield takeEvery<any>(fetchTrending.type, fetchData);
}

export default function* rootSaga() {
  yield all([fetchTrendingSaga()]);
}
