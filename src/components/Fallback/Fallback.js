import Loader from 'react-loader-spinner';
import s from './Fallback.module.css';

const Fallback = () => {
  return (
    <div className={s.loaderWrapper}>
      <Loader
        type="TailSpin"
        color="#76c0ba"
        height={60}
        width={60}
        timeout={3000}
      />
    </div>
  );
};

export default Fallback;
