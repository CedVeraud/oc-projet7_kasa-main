import logoFooter from '../../assets/logo/kasalogo.svg'
// ASSETS
import Styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_container}>
        <img
          className={Styles.footer_logo}
          src={logoFooter}
          alt="Logo Kasa blanc"
        />
        <p className={Styles.footer_credits}>
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer