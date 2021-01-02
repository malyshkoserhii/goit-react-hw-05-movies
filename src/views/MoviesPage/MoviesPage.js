import { useState, useEffect } from 'react';

import * as moviesApi from '../../services/movies-api';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MovieList';
// import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchMovies() {
      const fetch = await moviesApi
        .fetchMoviesWithQuery(query)
        .then(data => data.results);
      setMovies(state => [...state, ...fetch]);
    }

    if (query) fetchMovies();
  }, [query]);

  const onChangeQuery = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onChangeForm={onChangeQuery} />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;
