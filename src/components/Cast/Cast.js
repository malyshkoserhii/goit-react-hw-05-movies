import Fallback from '../Fallback/Fallback';
// import s from './Cast.module.css';

const Cast = ({ cast }) => {
  if (!cast.cast) {
    return <Fallback />;
  }

  if (cast.cast.length === 0) {
    return <p>Not found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Actor/Actress</th>
        </tr>
      </thead>
      {cast.cast.map((el, idx) => (
        <tbody key={`${el.id}_${idx}`}>
          <tr>
            <td>{el.character}</td>
            <td>{el.original_name}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Cast;
