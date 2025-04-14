import logoFooter from '../../assets/logo/kasalogo.svg';

import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <img
                    className="footer_container-logo"
                    src={logoFooter}
                    alt="Logo Kasa blanc"
                />
                <p className="footer_container-credits">
                    © 2020 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer