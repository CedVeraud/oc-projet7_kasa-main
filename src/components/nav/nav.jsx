import { NavLink } from 'react-router-dom'

import './nav.css'

function HeaderNav() {
  let activeNavLink = {
    textDecoration: 'underline',
  }
  return (
    <nav className="header_nav">
      <ul>
        <li className="header_nav-link">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeNavLink : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li className="header_nav-link">
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