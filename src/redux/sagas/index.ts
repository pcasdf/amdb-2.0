import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';

import {Category} from '../../types';
import {setResults, setStatusPending, setStatusFailed} from '../slices/trendingSlice';

const KEY = 'bada949f4005b48da2fb91c2ba013808';
const TMDB_MOVIE = 'https://api.themoviedb.org/3/movie';
const TMDB_BASE = 'https://api.themoviedb.org/3';
const OMDB_URL = 'https://www.omdbapi.com/?apikey=fdbaa0a9';

function* fetchTrending(type: Category) {
  try {
    const response = yield call(axios.get, [`${TMDB_BASE}/trending/${type}/week?api_key=${KEY}&page=1`]);
    yield put(setResults(response));
  } catch (error) {}
}
