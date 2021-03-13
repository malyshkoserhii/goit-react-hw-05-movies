import upArrow from '../../images/up-arrow.png';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.copyright}>
        Цей сайт створений із навчальною метою та не має на меті комерційне
        використання контенту. API надано сервісом
        <a
          href="https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id"
          className={s.api}
        >
          The Movie Database API
        </a>
      </div>
      <a href="#logo" className={s.link}>
        <img
          className={s.image}
          src={upArrow}
          alt="up-arrow"
          width="30"
          height="30"
        />
      </a>
    </footer>
  );
};

export default Footer;
