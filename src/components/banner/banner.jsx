import { useState, useEffect } from 'react'
// COMPONENTS
import Loader from '../../components/loader/loader'
// ASSETS
import Styles from './banner.module.scss'

function Banner(props) {
  const { img, name, bannerTitle } = props

  // LOADING
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timeout)
  }, [])

  // RENDER
  return (
    <section className={Styles.banner}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img className={Styles.banner_image} src={img} alt={name} />
          {bannerTitle ?
            <>
              <div className={Styles.banner_overlay}></div>
              <h1 className={Styles.banner_title}>
                {bannerTitle}
              </h1>
            </> : null
          }
        </>
      )}
    </section>
  )
}

export default Banner