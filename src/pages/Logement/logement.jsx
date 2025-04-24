import { Hooks } from '../../utils/hooks';
import { useParams, useNavigate } from "react-router-dom"

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

  //Error 
  const navigate = useNavigate()
  if (!currentLogement) {
    navigate('/error')
  }

  //// PUSH DATA ////
  //// COLLAPSE DESCRIPTION ////
  const Collapse1 = []
  Collapse1.push(currentLogement)
  //
  const collapse1Description = Collapse1[0]?.description
  const arrayDescription = []
  arrayDescription.push(collapse1Description)

  //// COLLAPSE EQUIPEMENT ////
  const Collapse2 = []
  Collapse2.push(currentLogement)
  //
  const collapse2Equipments = Collapse2[0]?.equipments
  const arrayEquipments = []
  arrayEquipments.push(collapse2Equipments)

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
        <Collapse title='Description' content={collapse1Description} />
        <Collapse title='Equipements' content={collapse2Equipments} />
      </div>
    </main>
  )
}

export default Logement