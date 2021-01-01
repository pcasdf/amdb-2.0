import axios from 'axios';

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
