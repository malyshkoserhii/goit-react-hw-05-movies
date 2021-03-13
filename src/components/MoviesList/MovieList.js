import MovieListItem from '../MovieListItem/MovieListItem';
import s from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <>
      <section className={s.list}>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
};

export default MoviesList;
