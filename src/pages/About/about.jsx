import Banner from '../../components/banner/banner'
import BannerImage from '../../assets/images/about-banner.jpg'

import Styles from './about.module.scss'

function About() {
  return (
    <main className={Styles.about}>
      <Banner img={BannerImage} name="Home banner" />
    </main>
  )
}

export default About