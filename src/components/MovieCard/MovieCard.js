import { Link, Route, useRouteMatch } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Review from '../Review/Review';
// import s from './MovieCard.module.css';

const MovieCard = ({ movie, cast, review }) => {
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title ? movie.title : movie.name}
      />
      <p>Title: {movie.title ? movie.title : movie.name}</p>
      <p>Release: {movie.release_date}</p>
      <p>
        Countries:{' '}
        {movie.production_countries.map(country => (
          <span key={country.iso_3166_1}>{country.name}</span>
        ))}
      </p>
      <p>
        Genre:{' '}
        {movie.genres.map(genre => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </p>
      <p>Description:</p>
      <p>{movie.overview}</p>

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
    </section>
  );
};

export default MovieCard;
