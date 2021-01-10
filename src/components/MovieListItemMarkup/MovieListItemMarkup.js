import s from './MovieListItemMarkup.module.css';

const MovieItemMarkup = ({ movie }) => {
  const movieTitle = movie.title ? movie.title : movie.name;
  const backdropImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const defaultImage =
    'https://college.unc.edu/wp-content/uploads/sites/1224/2020/05/film1.jpg';
  const backdrop = movie.backdrop_path ? backdropImage : defaultImage;

  return (
    <div className={s.movieItemSection}>
      <div className={s.movieListItemImageWrapper}>
        <img src={backdrop} alt={movieTitle} />
      </div>
      <p className={s.movieListItemTitle}>{movieTitle}</p>
    </div>
  );
};

MovieItemMarkup.defaultProps = {};

export default MovieItemMarkup;
