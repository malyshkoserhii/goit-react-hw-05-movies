import { useState, useEffect } from 'react';
import * as moviesApi from '../../services/movies-api';
import MovieList from '../../components/MoviesList/MovieList';
// import s from "./Homepage.module.css";

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    moviesApi
      .fetchTrendingMovies()
      .then(data => data.results)
      .then(setTrendingMovies);
  }, []);

  return <>{trendingMovies && <MovieList movies={trendingMovies} />}</>;
};

export default Homepage;
