import axios from 'axios';
import {CATEGORIES} from '../constants';
import {CategoryKey} from '../types';

const KEY = 'bada949f4005b48da2fb91c2ba013808';
const TMDB_MOVIE = 'https://api.themoviedb.org/3/movie';
const TMDB_BASE = 'https://api.themoviedb.org/3';
const OMDB_URL = 'https://www.omdbapi.com/?apikey=fdbaa0a9';

export const fetchData = async (url: string) => {
  try {
    return await axios.get(url);
  } catch (err) {
    console.error('Error fetching data from ', url);
    return null;
  }
};

export const fetchTrendingMovies = async (category: CategoryKey) => {
  const response = await fetchData(`${TMDB_BASE}/trending/${CATEGORIES[category]}/week?api_key=${KEY}&page=1`);
  console.log('file: index.ts ~ line 19 ~ response', response);
};

export const fetchTrendingTVSeries = async () => {
  const response = await fetchData(`${TMDB_BASE}/trending/tv/week?api_key=${KEY}&page=1`);
  console.log('file: index.ts ~ line 19 ~ response', response);
};

// trending general `${TMDB_BASE}/trending/${category}/${time}?api_key=${KEY}&page=${page}`
// details people `${TMDB_BASE}/person/${id}?api_key=${KEY}&language=en-US`
// more details people  `${TMDB_BASE}/search/person?api_key=${KEY}&language=en-US&query=${details.data.name}&page=1&include_adult=false`
// images people `${TMDB_BASE}/person/${id}/images?api_key=${KEY}`
// search `${TMDB_BASE}/search/multi?api_key=${KEY}&query=${input}&page=1
// top rated `${TMDB_BASE}/${category}/top_rated?api_key=${KEY}&language=en-US&page=${page}`
