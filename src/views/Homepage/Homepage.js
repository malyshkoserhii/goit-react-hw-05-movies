import { useState, useEffect } from 'react';
import * as moviesApi from '../../services/movies-api';
import MovieList from '../../components/MoviesList/MovieList';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';
// import s from "./Homepage.module.css";

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const initialHomePageRender = async () => {
      try {
        await moviesApi.fetchTrendingMovies(page).then(setTrendingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    initialHomePageRender();
  }, [page]);

  const loadingNextPage = () => {
    return setPage(state => state + 1);
  };

  const loadingPreviousPage = () => {
    return setPage(state => state - 1);
  };

  return (
    <>
      {trendingMovies && <MovieList movies={trendingMovies} />}
      <PaginationButtons
        page={page}
        setTrendingMovies={setTrendingMovies}
        onLoadingNextPage={loadingNextPage}
        onLoadingPreviousPage={loadingPreviousPage}
      />
    </>
  );
};

export default Homepage;
