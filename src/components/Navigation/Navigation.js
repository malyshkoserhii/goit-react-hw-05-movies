import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink exact to="/" className={s.navLink} activeClassName={s.activeLink}>
      Homepage
    </NavLink>
    <NavLink to="/movies" className={s.navLink} activeClassName={s.activeLink}>
      Movies
    </NavLink>
  </nav>
);
export default Navigation;
