const key = 'faafef79ea4c171e4623351b880cc7ac';
const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;

async function fetchTrendingMovies() {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found from Promise Reject'));
}

export default fetchTrendingMovies;
