import { NavLink } from 'react-router-dom'

import Styles from './nav.module.scss'

function HeaderNav() {
  let activeNavLink = {
    textDecoration: 'underline',
  }
  return (
    <nav className={Styles.nav}>
      <ul>
        <li className={Styles.nav_link}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeNavLink : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li className={Styles.nav_link}>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeNavLink : undefined)}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav