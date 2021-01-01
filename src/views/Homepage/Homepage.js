import { useState, useEffect } from 'react';
import fetchTrendingMovies from '../../services/movies-api';
import TrendingMovieList from '../../components/MovieList/MovieList';
// import s from "./Homepage.module.css";

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  // fetchTrendingMovies().then(data => console.log(data.results));

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => data.results)
      .then(setTrendingMovies);
  }, []);

  return <>{trendingMovies && <TrendingMovieList movies={trendingMovies} />}</>;
};

export default Homepage;
