import Banner from '../../components/banner/banner'
import bannerImage from '../../assets/images/home-banner.jpg'
import Gallery from '../../components/gallery/gallery'

import Styles from './home.module.scss'

function Home() {
  const bannerTitle = 'Chez vous, partout et ailleurs'
  return (
    <main className={Styles.home}>
      <Banner
        img={bannerImage}
        name="Home banner"
        bannerTitle={bannerTitle}
      />
      <Gallery />
    </main>
  )
}

export default Home