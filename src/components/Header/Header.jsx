import { Link } from "react-router-dom";
import logoHeader from '../../assets/images/kasalogo.svg';

export default function Header() {

    return (
        <header>
            <div className="header-cont">
                <Link to="/">
                    <img src={logoHeader}
                        className="logo-header"
                        alt="Logo Kasa"
                    />
                </Link>
            </div>
        </header>
    );
}