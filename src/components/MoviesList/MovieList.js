import MovieListItem from '../MovieListItem/MovieListItem';
// import PaginationButtons from '../PaginationButtons/PaginationButtons';
import s from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <>
      <div className={s.movieList}>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </div>
      {/* {movies.length >= 20 && <PaginationButtons />} */}
    </>
  );
};

export default MoviesList;
