import { Link } from 'react-router-dom'

import Styles from './404.module.scss'

function Error() {

  return (
    <main className={Styles.error}>
      <section className={Styles.error_container}>
        <h1 className={Styles.error_title}>404</h1>
        <p className={Styles.error_text}>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className={Styles.error_link} to="/">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </main>
  )
}

export default Error