import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MovieList from '../../components/MoviesList/MovieList';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';
// import s from "./Homepage.module.css";

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [page, setPage] = useState(1);
  const history = useHistory();

  const location = useLocation();
  console.log(location);
  console.log('PAGE FROM HOMEPAGE', page);

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

  // useEffect(() => {
  //   if (location.search !== '') {
  //     return;
  //   }
  //   history.push({ ...location, search: `page=${page}` });
  // }, [page, history, location]);

  // const initialPage = new URLSearchParams(location.search).get('page') ?? 1;
  // console.log('initialPage', initialPage);

  const loadingNextPage = () => {
    // history.push({ ...location, search: `page=${page}` });
    return setPage(state => state + 1);
  };

  return (
    <>
      {trendingMovies && <MovieList movies={trendingMovies} />}
      <PaginationButtons
        page={page}
        setTrendingMovies={setTrendingMovies}
        onLoadingNextPage={loadingNextPage}
      />
    </>
  );
};

export default Homepage;
