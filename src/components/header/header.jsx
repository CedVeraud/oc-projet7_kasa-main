import { Link } from 'react-router-dom'
// COMPONENTS
import HeaderNav from '../nav/nav'
// ASSETS
import HeaderLogo from '../../assets/logo/kasalogo.svg'
import Styles from './header.module.scss'

function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.header_container}>
        <Link to="/home">
          <img
            src={HeaderLogo}
            className={Styles.header_logo}
            alt="logo Kasa"
          />
        </Link>

        <HeaderNav />
      </div>
    </header>
  )
}

export default Header