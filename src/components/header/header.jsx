import { Link } from 'react-router-dom'

import HeaderLogo from '../../assets/logo/kasalogo.svg'
import HeaderNav from '../nav/nav'

import Styles from './header.module.scss'

function Header() {
    return (
        <header className={Styles.header}>
            <div className={Styles.header_container}>
                <Link to="/">
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