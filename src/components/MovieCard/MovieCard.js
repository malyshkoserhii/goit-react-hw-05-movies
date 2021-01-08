import { Link, Route, useRouteMatch } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Review from '../Review/Review';
import s from './MovieCard.module.css';

const MovieCard = ({ movie, cast, review }) => {
  const { url } = useRouteMatch();
  const posterImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const defaultImage =
    'https://i.dlpng.com/static/png/1330322-minion-concerned-minion-png-400_400_preview.png';
  const poster = movie.poster_path ? posterImage : defaultImage;

  return (
    <section className={s.movieCardSection}>
      <div className={s.movieCardDescriptionWrapper}>
        <div className={s.imageDescriptionWrapper}>
          <img
            src={poster}
            alt={movie.title ? movie.title : movie.name}
            className={s.moviesCardImage}
          />
        </div>
        <div className={s.movieCardDescription}>
          <h2 className={s.movieCardHeader}>
            <span className={s.movieCardTitle}>Title:</span>{' '}
            {movie.title ? movie.title : movie.name}
          </h2>
          <p className={s.movieCardDescription}>
            <span className={s.movieCardTitle}>Release:</span>{' '}
            {movie.release_date}
          </p>
          {/* <p className={s.movieCardDescription}>
            <span className={s.movieCardTitle}>Countries: </span>
            {movie.production_countries.map(country => (
              <span key={country.iso_3166_1}>{country.name}</span>
            ))}
          </p> */}
          {/* <p className={s.movieCardDescription}>
            <span className={s.movieCardTitle}>Genre: </span>
            {movie.genres.map(genre => (
              <span key={genre.id}>
                <span>{genre.name}</span>
              </span>
            ))}
          </p> */}
          <p className={s.movieCardDescription}>
            <span className={s.movieCardTitle}>Description:</span>
          </p>
          <p className={s.movieCardDescription}>{movie.overview}</p>

          <Link to={`${url}/cast`}>Cast</Link>
          <hr />
          <Route path={`${url}/cast`}>
            <Cast cast={cast} />
          </Route>
          <Link to={`${url}/reviews`}>Reviews</Link>
          <hr />
          <Route path={`${url}/reviews`}>
            <Review review={review} />
          </Route>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
