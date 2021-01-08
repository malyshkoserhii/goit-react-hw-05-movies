import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MovieCard from '../../components/MovieCard/MovieCard';
// import s from './MovieDetailsView.module.css';

const MovieDetailsView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState(null);
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        await moviesApi.fetchMovieById(movieId).then(setMovie);
        console.log('123');
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [movieId]);

  useState(() => {
    moviesApi.fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  useState(() => {
    moviesApi.fetchMovieReview(movieId).then(setReview);
  }, [movieId]);

  return <MovieCard movie={movie} cast={cast} review={review} />;
};

export default MovieDetailsView;
