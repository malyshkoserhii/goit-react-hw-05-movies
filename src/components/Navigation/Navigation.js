/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/icon-filmoteka.png';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <div class={s.logo}>
      <Link to="/" className={s.logoLink}>
        <img src={logo} alt="Filmoteka Logo Image" className={s.image} />
        <span className={s.span}>Filmoteka</span>
      </Link>
    </div>
    <ul className={s.navigationList}>
      <li className={s.navigationItem}>
        <NavLink
          exact
          to="/"
          className={s.navLink}
          activeClassName={s.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={s.navigationItem}>
        <NavLink
          to="/movies"
          className={s.navLink}
          activeClassName={s.activeLink}
        >
          Movies
        </NavLink>{' '}
      </li>
    </ul>
  </nav>
);
export default Navigation;
