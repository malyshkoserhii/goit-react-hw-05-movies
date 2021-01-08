import { Link, useRouteMatch } from 'react-router-dom';
import s from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { url } = useRouteMatch();
  const backdropImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const defaultImage =
    'https://college.unc.edu/wp-content/uploads/sites/1224/2020/05/film1.jpg';
  const backdrop = movie.backdrop_path ? backdropImage : defaultImage;

  return url === '/' ? (
    <Link to={`${movie.id}`} className={s.movieGallery}>
      <section className={s.movieGallerySection}>
        <div className={s.imageWrapper}>
          <img src={backdrop} alt={movie.title ? movie.title : movie.name} />
        </div>
        <p className={s.galleryMovieTitle}>
          {movie.title ? movie.title : movie.name}
        </p>
      </section>
    </Link>
  ) : (
    <Link to={`${url}/${movie.id}`} className={s.movieGallery}>
      <>
        <section className={s.movieGallerySection}>
          <div className={s.imageWrapper}>
            <img src={backdrop} alt={movie.title ? movie.title : movie.name} />
          </div>
          <p className={s.galleryMovieTitle}>
            {movie.title ? movie.title : movie.name}
          </p>
        </section>
      </>
    </Link>
  );
};

export default MovieListItem;
