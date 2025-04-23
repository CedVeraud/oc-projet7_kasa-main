import { Hooks } from '../../utils/hooks'
import { useParams } from 'react-router-dom'

import starIsOn from '../../assets/images/rating-star-on.svg'
import starIsOff from '../../assets/images/rating-star-off.svg'

import Styles from './rating.module.scss'

function Rating() {
  //// FIND DATA ////
  const dataLogements = Hooks()
  const { logementId } = useParams()
  const currentLogement = dataLogements.find((data) => data.id === logementId)

  //// PUSH DATA ////
  const Rating = []
  Rating.push(currentLogement)
  // array
  const starsRating = Rating[0]?.rating
  const arrayRating = []
  arrayRating.push(starsRating)

  // Count stars
  const rating = Number(starsRating)
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className={Styles.rating_container}>
      {stars.map((star) =>
        star > rating ? (
          <img key={star} src={starIsOff} className={Styles.rating_off} />
        ) : (
          <img key={star} src={starIsOn} className={Styles.rating_on} />
        )
      )}
    </div>
  )
}

export default Rating