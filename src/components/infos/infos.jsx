import { Hooks } from '../../utils/hooks'
import { useParams } from "react-router-dom"

import Styles from './infos.module.scss';

function Infos() {

  //// FIND DATA ////
  const dataLogements = Hooks()
  const { logementId } = useParams()
  const currentLogement = dataLogements.find((data) => data.id === logementId)

  //// PUSH DATA ////
  // title
  const Title = []
  Title.push(currentLogement)
  // array
  const infosTitle = Title[0]?.title
  const arrayTitle = []
  arrayTitle.push(infosTitle)

  // location
  const Location = []
  Location.push(currentLogement)
  // array
  const infosLocation = Location[0]?.location
  const arrayLocation = []
  arrayLocation.push(infosLocation)

  // tags
  const Tag = []
  Tag.push(currentLogement)
  // array
  const infosTag = Tag[0]?.tags
  const arrayTag = []
  arrayTag.push(infosTag)

  return (
    <div className={Styles.infos_container}>
      <h1 key={infosTitle} className={Styles.infos_title}>
        {infosTitle}
      </h1>

      <p key={infosLocation} className={Styles.infos_location}>
        {infosLocation}
      </p>

      <div key={infosTag} className={Styles.infos_tags}>
        {infosTag && infosTag.length > 0 && infosTag.map((infosTags, i) => (
          <span key={i} className={Styles.infos_tagsCont}>
            {infosTags}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Infos