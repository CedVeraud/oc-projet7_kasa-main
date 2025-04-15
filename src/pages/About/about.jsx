import Banner from '../../components/banner/banner'
import BannerImage from '../../assets/images/about-banner.jpg'

import './about.css'

function About() {
    return (
        <main className="about">
            <Banner img={BannerImage} name="Home banner" />
        </main>
    )
}

export default About