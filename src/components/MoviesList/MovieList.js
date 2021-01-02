import MovieCard from '../MovieGallery/MovieGallery';
import s from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={s.movieList}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
