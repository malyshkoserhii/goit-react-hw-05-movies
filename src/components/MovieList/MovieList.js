import MovieCard from '../MovieCard/MovieCard';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={s.movieList}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
