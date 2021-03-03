import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MovieList';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';
// import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const page = Number(new URLSearchParams(location.search).get('page') || 1);

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

  const changePage = page => {
    history.push({
      ...location,
      search: `&page=${page}`,
    });
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
          changePage={changePage}
        />
      )}
    </>
  );
};

export default MoviesPage;
