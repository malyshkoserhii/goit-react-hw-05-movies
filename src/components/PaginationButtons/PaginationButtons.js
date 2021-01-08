import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import s from './PaginationButtons.module.css';

const PaginationButtons = ({
  page,
  query,
  setTrendingMovies,
  setMovies,
  onLoadingNextPage,
}) => {
  const url = useRouteMatch();

  useEffect(() => {
    if (url !== '/') {
      return;
    }

    const homepageRequest = async page => {
      try {
        await moviesApi.fetchTrendingMovies(page).then(setTrendingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    homepageRequest();
  }, [page, setTrendingMovies, url]);

  useEffect(() => {
    if (url !== '/movies') {
      return;
    }

    const moviesPageRequest = async (query, page) => {
      try {
        await moviesApi.fetchMoviesWithQuery(query, page).then(setMovies);
      } catch (error) {
        console.log(error);
      }
    };
    moviesPageRequest(query, page);
  }, [page, query, setMovies, url]);

  return (
    <div className={s.buttonsWrapper}>
      <button type="submit" className={s.paginationButton}>
        Previous
      </button>
      <span className={s.counter}>{page}</span>
      <button
        type="submit"
        className={s.paginationButton}
        onClick={onLoadingNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
