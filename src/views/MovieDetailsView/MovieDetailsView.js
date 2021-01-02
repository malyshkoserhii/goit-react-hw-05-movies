import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MovieCard from '../../components/MovieCard/MovieCard';

// import s from './MovieDetailsView.module.css';

const MovieDetailsView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [review, setReview] = useState(null);

  useEffect(() => {
    moviesApi
      .fetchMovieById(movieId)
      .then(data => data)
      .then(setMovie);
  }, [movieId]);

  useState(() => {
    moviesApi
      .fetchMovieCast(movieId)
      .then(data => data)
      .then(setCast);
  }, [movieId]);

  useState(() => {
    moviesApi
      .fetchMovieReview(movieId)
      .then(data => data)
      .then(setReview);
  }, [movieId]);

  return movie && <MovieCard movie={movie} cast={cast} review={review} />;
};

export default MovieDetailsView;
