// import s from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <ul>
      <li>
        <div>
          <p>{cast.cast.map(el => el.original_name)}</p>
        </div>
      </li>
      <li>
        <div>
          <p>{cast.cast.map(el => el.character)}</p>
        </div>
      </li>
    </ul>
  );
};

export default Cast;
