// import s from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Actor/Actress</th>
        </tr>
      </thead>
      {cast.cast.map(el => (
        <tr>
          <td>{el.character}</td>
          <td>{el.original_name}</td>
        </tr>
      ))}
    </table>
  );
};

export default Cast;
