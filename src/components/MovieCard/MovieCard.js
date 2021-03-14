import {
  Link,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import Cast from '../Cast/Cast';
import Review from '../Review/Review';
import Fallback from '../Fallback/Fallback';
import s from './MovieCard.module.css';

const MovieCard = ({ movie, cast, review }) => {
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const posterImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const defaultImage =
    'https://college.unc.edu/wp-content/uploads/sites/1224/2020/05/film1.jpg';
  const poster = movie.poster_path ? posterImage : defaultImage;

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  if (!movie.title) {
    return <Fallback />;
  }

  return (
    <>
      <div className={s.backBtnWrapper}>
        <button type="button" onClick={onGoBack} className={s.button}>
          Back
        </button>
      </div>
      <section className={s.details}>
        <div className={s.imageBlock}>
          <img
            src={poster}
            alt={movie.title ? movie.title : movie.name}
            className={s.moviesCardImage}
          />
        </div>
        <div className={s.infoBlock}>
          <h2 className={s.title}>{movie.title ? movie.title : movie.name}</h2>

          <ul>
            <li className={s.infoItem}>
              <p className={s.infoName}>vote/votes</p>
              <p className={s.infoValue}>{movie.vote_average}</p>
            </li>
            <li className={s.infoItem}>
              <p className={s.infoName}>popularity</p>
              <p className={s.infoValue}>{movie.popularity}</p>
            </li>
            <li className={s.infoItem}>
              <p className={s.infoName}>original title</p>
              <p className={s.infoValue}>{movie.original_title}</p>
            </li>
            <li className={s.infoItem}>
              <p className={s.infoName}>genre</p>
              <p className={s.infoValue}>
                {movie.genres.map((genre, idx) => (
                  <span key={genre.id}>
                    <span>
                      {idx + 1 === movie.genres.length
                        ? `${genre.name}`
                        : `${genre.name}, `}
                    </span>
                  </span>
                ))}
              </p>
            </li>
            <li className={s.infoItem}>
              <p className={s.infoName}>release date</p>
              <p className={s.infoValue}>{movie.release_date}</p>
            </li>
            <li className={s.infoItem}>
              <p className={s.infoName}>country / countries</p>
              <p className={s.infoValue}>
                {movie.production_countries.map(country => (
                  <span key={country.iso_3166_1}>{country.name}</span>
                ))}
              </p>
            </li>
            <li className={s.infoItem}>
              <p className={s.infoName}>tagline</p>
              <p className={s.infoValue}>{movie.tagline}</p>
            </li>
          </ul>

          <h3 className={s.title}>About</h3>
          <p className={s.description}>{movie.overview}</p>

          <Link to={`${url}/cast`} className={s.link}>
            Cast
          </Link>

          <Route path={`${url}/cast`}>
            <Cast cast={cast} />
          </Route>
          <Link to={`${url}/reviews`} className={s.link}>
            Reviews
          </Link>

          <Route path={`${url}/reviews`}>
            <Review review={review} />
          </Route>
        </div>
      </section>
    </>
  );
};

MovieCard.defaultProps = {
  movie: [],
  cast: [],
  review: [],
};

export default MovieCard;
