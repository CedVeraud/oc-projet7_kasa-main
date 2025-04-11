import { Link } from "react-router-dom";
import logoHeader from '../../assets/logo/kasalogo.svg';

export default function Header() {

    return (
        <header>
            <div className="header_container">
                <Link to="/">
                    <img src={logoHeader}
                        className="header_logo"
                        alt="Logo Kasa"
                    />
                </Link>
            </div>
        </header>
    );
}