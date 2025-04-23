import Carousel from '../../components/carousel/carousel'
import Infos from '../../components/infos/infos'
import Host from '../../components/host/host'
import Rating from '../../components/rating/rating'
import Collapse from '../../components/collapse/collapse'

import Styles from './logement.module.scss'

function Logement() {
  return (
    <main className={Styles.logement}>
      <Carousel />
      <div className={Styles.logement_infos}>
        <Infos />
        <div className={Styles.hostRating_container}>
          <Rating />
          <Host />
        </div>
      </div>
      <div className={Styles.collapse_container}>
        <Collapse title='Description' />
        <Collapse title='Equipements' />
      </div>
    </main>
  )
}

export default Logement