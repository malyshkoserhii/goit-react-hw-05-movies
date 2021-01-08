import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'faafef79ea4c171e4623351b880cc7ac';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export async function fetchTrendingMovies(page) {
  try {
    const { data } = await axios.get('/trending/all/day', {
      params: { page: page },
    });

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}

export async function fetchMoviesWithQuery(query, page) {
  try {
    const { data } = await axios.get(`/search/movie/`, {
      params: { query: query, page: page },
    });
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}

export async function fetchMovieById(movieId) {
  try {
    const { data } = await axios(`/movie/${movieId}`);
    console.log('{data}', data);
    return await data;
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
