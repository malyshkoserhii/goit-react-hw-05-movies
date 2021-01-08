import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'faafef79ea4c171e4623351b880cc7ac';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get('/trending/all/day');
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export async function fetchMoviesWithQuery(query) {
  try {
    const { data } = await axios.get(`/search/movie/?query=${query}`);

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}

export async function fetchMovieById(movieId) {
  try {
    const { data } = await axios(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const { data } = await axios(`movie/${movieId}/credits`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}

export async function fetchMovieReview(movieId) {
  try {
    const { data } = await axios(`movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}
