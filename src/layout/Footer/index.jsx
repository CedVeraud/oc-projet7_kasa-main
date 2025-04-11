import logoFooter from '../../assets/logo/kasalogo_wh.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div
                className='footer__container'>

                <img
                    src={logoFooter}
                    alt="Logo Kasa blanc">
                </img>

                <p
                    className="footer__container--p">
                    © 2020, Kasa All rights reserved
                </p>

            </div>
        </footer>
    );
}