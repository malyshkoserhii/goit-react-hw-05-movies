const key = 'faafef79ea4c171e4623351b880cc7ac';
const BASE_URL = 'https://api.themoviedb.org';

export async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${key}`);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found from Promise Reject'));
}

export async function fetchMoviesWithQuery(query) {
  const response = await fetch(
    `${BASE_URL}/3/search/movie?api_key=${key}&query=${query}`,
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found from Promise Reject'));
}

export async function fetchMoviesById(movieId) {
  const response = await fetch(`${BASE_URL}/3/movie/${movieId}?api_key=${key}`);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found from Promise Reject'));
}

export async function fetchMoviesCast(movieId) {
  const response = await fetch(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${key}`,
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found from Promise Reject'));
}
