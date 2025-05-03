import { Hooks } from '../../utils/hooks'
// COMPONENTS
import Banner from '../../components/banner/banner'
import Gallery from '../../components/gallery/gallery'
// ASSETS
import bannerImage from '../../assets/images/home-banner.jpg'
import Styles from './home.module.scss'

function Home() {
  const logements = Hooks();
  const bannerTitle = ["Chez vous, ", "partout et ailleurs"]

  return (
    <main className={Styles.home}>
      <Banner
        img={bannerImage}
        name="Home banner"
        bannerTitle=
        {bannerTitle && bannerTitle.length > 0 && bannerTitle.map((splitTitle, i) => (
          <span key={i} className={Styles.banner_title}>
            {splitTitle?.split('  ')[0]}
            {splitTitle?.split('  ')[1]}
          </span>
        ))}
      />
      <Gallery logements={logements} />
    </main>
  )
}

export default Home