import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MovieCard from '../../components/MovieCard/MovieCard';

// import s from './MovieDetailsView.module.css';

const MovieDetailsView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesApi
      .fetchMoviesById(movieId)
      .then(data => data)
      .then(setMovie);
  }, [movieId]);

  useState(() => {
    moviesApi
      .fetchMoviesCast(movieId)
      .then(data => data)
      .then(setCast);
  }, [movieId]);

  return movie && <MovieCard movie={movie} cast={cast} />;
};

export default MovieDetailsView;
