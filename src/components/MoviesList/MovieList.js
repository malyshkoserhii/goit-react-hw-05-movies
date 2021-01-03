import MovieCard from '../MovieGallery/MovieGallery';
import s from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <div className={s.movieList}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
