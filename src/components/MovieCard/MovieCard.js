import { Link } from 'react-router-dom';
import s from './MovieCard.module.css';

const MovieCard = ({ movie }) => (
  <Link to={`${movie.id}`} className={s.MovieCard}>
    {movie.title ? movie.title : movie.name}
  </Link>
);

export default MovieCard;
