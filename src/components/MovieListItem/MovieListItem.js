import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import MovieListItemMarkup from '../MovieListItemMarkup/MovieListItemMarkup';
import s from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { url } = useRouteMatch();
  const location = useLocation();
  const pathname = url === '/' ? `${movie.id}` : `${url}/${movie.id}`;

  return (
    <Link
      to={{
        pathname: pathname,
        state: {
          from: location,
        },
      }}
      className={s.item}
    >
      <MovieListItemMarkup movie={movie} />
    </Link>
  );
};

export default MovieListItem;
