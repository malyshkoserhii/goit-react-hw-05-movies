import { Link, useRouteMatch } from 'react-router-dom';
import s from './MovieGallery.module.css';

const MovieCard = ({ movie }) => {
  const { url } = useRouteMatch();
  const backdropImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const defaultImage =
    'https://i.dlpng.com/static/png/1330322-minion-concerned-minion-png-400_400_preview.png';
  const backdrop = movie.backdrop_path ? backdropImage : defaultImage;

  return url === '/' ? (
    <Link to={`${movie.id}`} className={s.MovieCard}>
      <>
        <div className={s.imageWrapper}>
          <img
            src={backdrop}
            alt={movie.title ? movie.title : movie.name}
            className={
              movie.backdrop_path ? s.galleryImage : s.defaultGalleryImage
            }
          />
        </div>
        <p className={s.galleryMovieTitle}>
          {movie.title ? movie.title : movie.name}
        </p>
      </>
    </Link>
  ) : (
    <Link to={`${url}/${movie.id}`} className={s.MovieCard}>
      <>
        <div className={s.imageWrapper}>
          <img
            src={backdrop}
            alt={movie.title ? movie.title : movie.name}
            className={
              movie.backdrop_path ? s.galleryImage : s.defaultGalleryImage
            }
          />
        </div>
        <p className={s.galleryMovieTitle}>
          {movie.title ? movie.title : movie.name}
        </p>
      </>
    </Link>
  );
};

export default MovieCard;
