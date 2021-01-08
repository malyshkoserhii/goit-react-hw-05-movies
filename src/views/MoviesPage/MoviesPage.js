import { useState, useEffect } from 'react';

import * as moviesApi from '../../services/movies-api';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MovieList';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';
// import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchMovies() {
      const fetch = await moviesApi.fetchMoviesWithQuery(query, page);
      setMovies(state => [...state, ...fetch]);
    }

    if (query) fetchMovies();
  }, [query, page]);

  const onChangeQuery = query => {
    setQuery(query);
    console.log(query);
  };

  const loadingNextPage = () => {
    return setPage(state => state + 1);
  };

  return (
    <>
      <SearchForm onChangeForm={onChangeQuery} />
      <MoviesList movies={movies} />
      <PaginationButtons
        query={query}
        page={page}
        setMovies={setMovies}
        onLoadingNextPage={loadingNextPage}
      />
    </>
  );
};

export default MoviesPage;
