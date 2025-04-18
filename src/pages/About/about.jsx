import Banner from '../../components/banner/banner'
import BannerImage from '../../assets/images/about-banner.jpg'

import Styles from './about.module.scss'

function About() {
  return (
    <main className={Styles.about}>
<<<<<<< Updated upstream
      <Banner img={BannerImage} name="Home banner" />
=======
      <Banner
        img={bannerImage}
        name="Home banner"
      />,

      <div className={Styles.about_collapse}>
        {about.map((about) => (
          // console.log(about),
          <Collapse
            key={about.id}
            id={about.id}
            title={about.title}
            content={about.content}
          />
        ))}
      </div>

>>>>>>> Stashed changes
    </main>
  )
}

export default About