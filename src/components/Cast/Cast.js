import Fallback from '../Fallback/Fallback';
// import s from './Cast.module.css';

const Cast = ({ cast }) => {
  if (!cast.cast) {
    return <Fallback />;
  }

  if (cast.cast.length === 0) {
    return <p>Not found</p>;
  }

  // return (
  //   <div className={s.container}>
  //     <div className={s.card}>
  //       <img src="#" alt="actor or actess photo" />
  //       <p className={s.name}> </p>
  //       <p className={s.character}>
  //         {cast && cast.cast.map(el => el.character)}
  //       </p>
  //     </div>
  //   </div>
  // );

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

Cast.defaultProps = {
  cast: [],
};

export default Cast;
