import { Link } from 'react-router-dom'

import HeaderLogo from '../../assets/logo/kasalogo.svg'
import HeaderNav from '../nav/nav'

import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="header_container">
                <Link to="/">
                    <img
                        src={HeaderLogo}
                        className="header-logo"
                        alt="logo Kasa"
                    />
                </Link>
                <HeaderNav />
            </div>

        </header>
    )
}

export default Header