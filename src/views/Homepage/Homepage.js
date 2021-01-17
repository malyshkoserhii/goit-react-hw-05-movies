import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MovieList from '../../components/MoviesList/MovieList';
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons';
import utilites from '../../utilites/utilites';
// import s from "./Homepage.module.css";

const Homepage = () => {
  const page = Number(utilites.getParameterByName('page')) || 1;
  const [trendingMovies, setTrendingMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

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
