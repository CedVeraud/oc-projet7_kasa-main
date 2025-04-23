import { Hooks } from '../../utils/hooks'
import { useParams } from "react-router-dom"

import Styles from './host.module.scss';

function Host() {
  //// FIND DATA ////
  const dataLogements = Hooks()
  const { logementId } = useParams()
  const currentLogement = dataLogements.find((data) => data.id === logementId)

  //// PUSH DATA ////
  // Host Name
  const Name = []
  Name.push(currentLogement)
  // array
  const hostName = Name[0]?.host.name
  const arrayName = []
  arrayName.push(hostName)

  // Host Picture
  const Picture = []
  Picture.push(currentLogement)
  // array
  const hostPicture = Picture[0]?.host.picture
  const arrayPicture = []
  arrayPicture.push(hostPicture)

  return (
    <div className={Styles.host}>
      <div className={Styles.host_container}>
        <p className={Styles.host_name}>
          {hostName}
        </p>

        {Picture && Picture.length > 0 && Picture.map((hostPicture, i) => (
          <img
            className={Styles.host_picture}
            key={i}
            src={hostPicture?.host.picture}
            alt=" "
          />
        ))}
      </div>
    </div>
  )
}

export default Host