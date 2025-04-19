import { useEffect, useState } from 'react'

import Banner from '../../components/banner/banner'
import Collapse from '../../components/collapse/collapse'

import bannerImage from '../../assets/images/about-banner.jpg'
import Styles from './about.module.scss'

function About() {
  const [about, setAbout] = useState([])

  useEffect(() => {
    fetch('/src/utils/data/about.json')
      .then((res) => res.json())
      .then((res) => setAbout(res))
      .catch((err) => console.log('Erreur : ', err))
  }, [])

  return (
    <main className={Styles.about}>
      <Banner
        img={bannerImage}
        name="Home banner"
      />

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

    </main>
  )
}

export default About