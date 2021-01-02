import { Link, useRouteMatch } from 'react-router-dom';
import s from './MovieGallery.module.css';

const MovieCard = ({ movie }) => {
  const { url } = useRouteMatch();

  return url === '/' ? (
    <Link to={`${movie.id}`} className={s.MovieCard}>
      {movie.title ? movie.title : movie.name}
    </Link>
  ) : (
    <Link to={`${url}/${movie.id}`} className={s.MovieCard}>
      {movie.title ? movie.title : movie.name}
    </Link>
  );
};

export default MovieCard;
