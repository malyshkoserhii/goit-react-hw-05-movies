import s from './MoviesPage.module.css';

const Movies = () => {
  return (
    <>
      <form className={s.searchForm}>
        <label htmlFor="searchMovie">
          <input id="searchMovie" className={s.input} />
        </label>
        <button type="button" className={s.searchButton}>
          Search
        </button>
      </form>
    </>
  );
};

export default Movies;
