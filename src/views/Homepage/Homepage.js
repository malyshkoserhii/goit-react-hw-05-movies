import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MovieList from '../../components/MoviesList/MovieList';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';
// import s from "./Homepage.module.css";

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const page = Number(new URLSearchParams(location.search).get('page') || 1);

  useEffect(() => {
    const initialHomePageRender = async () => {
      try {
        await moviesApi.fetchTrendingMovies(page).then(setTrendingMovies);
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    initialHomePageRender();
  }, [page]);

  const changePage = page => {
    history.push({
      ...location,
      search: `page=${page}`,
    });
  };

  return (
    <>
      {trendingMovies && <MovieList movies={trendingMovies} />}
      <PaginationButtons
        page={page}
        setTrendingMovies={setTrendingMovies}
        changePage={changePage}
      />
    </>
  );
};

export default Homepage;
