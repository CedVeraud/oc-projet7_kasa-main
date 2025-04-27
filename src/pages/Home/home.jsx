import { Hooks } from '../../utils/hooks'
import Banner from '../../components/banner/banner'
import Gallery from '../../components/gallery/gallery'

import bannerImage from '../../assets/images/home-banner.jpg'
import Styles from './home.module.scss'

function Home() {

  const logements = Hooks();
  const bannerTitle = 'Chez vous, partout et ailleurs'

  return (
    <main className={Styles.home}>
      <Banner
        img={bannerImage}
        name="Home banner"
        bannerTitle={bannerTitle}
      />
      <Gallery logements={logements} />
    </main>
  )
}

export default Home