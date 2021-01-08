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
      try {
        await moviesApi.fetchMoviesWithQuery(query, page).then(setMovies);
      } catch (error) {
        console.log(error);
        return [];
      }
    }

    if (query) fetchMovies();
  }, [query, page]);

  const onChangeQuery = query => {
    setQuery(query);
  };

  const loadingNextPage = () => {
    return setPage(state => state + 1);
  };

  const loadingPreviousPage = () => {
    return setPage(state => state - 1);
  };

  return (
    <>
      <SearchForm onChangeForm={onChangeQuery} />
      <MoviesList movies={movies} />
      {movies.length >= 20 && (
        <PaginationButtons
          query={query}
          page={page}
          setMovies={setMovies}
          onLoadingNextPage={loadingNextPage}
          onLoadingPreviousPage={loadingPreviousPage}
        />
      )}
    </>
  );
};

export default MoviesPage;
