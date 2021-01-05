import { useState } from 'react';
import s from './SearchForm.module.css';

const SearchForm = ({ onChangeForm }) => {
  const [search, setSearch] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onChangeForm(search);
  };

  const onInputCahnge = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  return (
    <form className={s.searchForm} onSubmit={onFormSubmit}>
      <label htmlFor="searchMovie">
        <input
          id="searchMovie"
          className={s.input}
          placeholder="Enter a movie"
          onChange={onInputCahnge}
        />
      </label>
      <button type="submit" className={s.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
