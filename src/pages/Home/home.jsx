import Banner from '../../components/banner/banner'
import bannerImage from '../../assets/images/home-banner.jpg'
import Gallery from '../../components/gallery/gallery'

import './home.css'

function Home() {
    const bannerTitle = 'Chez vous, partout et ailleurs'
    return (
        <main className="home">
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