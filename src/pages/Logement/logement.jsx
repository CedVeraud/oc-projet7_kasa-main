import { Hooks } from '../../utils/hooks';
import { useParams } from "react-router-dom"

import Carousel from '../../components/carousel/carousel'
import Infos from '../../components/infos/infos'
import Host from '../../components/host/host'
import Rating from '../../components/rating/rating'
import Collapse from '../../components/collapse/collapse'

import Styles from './logement.module.scss'

function Logement() {
  //// FIND DATA ////
  const dataLogements = Hooks()
  const { logementId } = useParams()
  const currentLogement = dataLogements.find((data) => data.id === logementId)

  //// PUSH DATA ////
  const currentProps = []
  currentProps.push(currentLogement)

  //
  const infosTitle = currentProps[0]?.title
  const infosLocation = currentProps[0]?.location
  //
  const Hostname = currentProps[0]?.host.name.split(' ')
  const Hostpicture = currentProps[0]?.host.picture
  //
  const rating = currentProps[0]?.rating

  return (
    <main className={Styles.logement}>
      <Carousel />
      <div className={Styles.logement_infos}>
        <Infos
          title={infosTitle}
          location={infosLocation}
          tag={currentProps[0]?.tags}

        />
        <div className={Styles.hostRating_container}>
          <Rating rating={rating} />
          <Host
            hostName={Hostname}
            picture={Hostpicture}
          />
        </div>
      </div>
      <div className={Styles.collapse_container}>
        <Collapse title='Description' content={currentProps[0]?.description} />
        <Collapse title='Equipements' content={currentProps[0]?.equipments} />
      </div>
    </main>
  )
}

export default Logement