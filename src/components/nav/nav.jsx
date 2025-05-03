import { NavLink } from 'react-router-dom'
// ASSETS
import Styles from './nav.module.scss'

function HeaderNav() {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li className={Styles.nav_link}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? Styles.nav_link_isActive : Styles.nav_link_isNotActive)}
          >
            Accueil
            <hr />
          </NavLink>
        </li>
        <li className={Styles.nav_link}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? Styles.nav_link_isActive : Styles.nav_link_isNotActive)}
          >
            A Propos
            <hr />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav