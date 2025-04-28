import { Link } from 'react-router-dom'
import Styles from './404.module.scss'
import { useState, useEffect } from "react";

import Loader from '../../components/loader/loader'

function Error() {
  // LOADING
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className={Styles.error}>
      {isLoading ? (
        <Loader />
      ) : (

        <section className={Styles.error_container}>
          <h1 className={Styles.error_title}>404</h1>
          <p className={Styles.error_text}>
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link className={Styles.error_link} to="/">
            Retourner sur la page d’accueil
          </Link>
        </section>
      )}
    </main>
  )
}

export default Error