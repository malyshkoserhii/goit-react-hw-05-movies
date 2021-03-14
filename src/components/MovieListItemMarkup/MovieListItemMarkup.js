import s from './MovieListItemMarkup.module.css';

const MovieItemMarkup = ({ movie }) => {
  const vote = movie.vote_average;
  const date = movie.release_date ?? movie.first_air_date;
  const title = movie.title ? movie.title : movie.name;
  const backdropImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const defaultImage =
    'https://college.unc.edu/wp-content/uploads/sites/1224/2020/05/film1.jpg';
  const backdrop = movie.backdrop_path ? backdropImage : defaultImage;

  return (
    <>
      <img src={backdrop} alt={title} className={s.image} />
      <p className={s.title}>
        <span> {title} </span>
        <span> ({date && date.slice(0, 4)}) </span>
      </p>
      <p className={s.raiting}>{vote}</p>
    </>
  );
};

MovieItemMarkup.defaultProps = {};

export default MovieItemMarkup;
