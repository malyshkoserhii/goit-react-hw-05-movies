import MovieListItem from '../MovieListItem/MovieListItem';
import s from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <>
      <div className={s.movieList}>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
