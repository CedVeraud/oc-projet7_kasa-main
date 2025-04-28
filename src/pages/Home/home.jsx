import { Hooks } from '../../utils/hooks'
import { useState, useEffect } from "react";

import Loader from '../../components/loader/loader'
import Banner from '../../components/banner/banner'
import Gallery from '../../components/gallery/gallery'

import bannerImage from '../../assets/images/home-banner.jpg'
import Styles from './home.module.scss'

function Home() {
  const logements = Hooks();
  const bannerTitle = 'Chez vous, partout et ailleurs'

  // LOADING
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className={Styles.home}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            img={bannerImage}
            name="Home banner"
            bannerTitle={bannerTitle}
          />
          <Gallery logements={logements} />
        </>
      )}
    </main>
  )
}

export default Home