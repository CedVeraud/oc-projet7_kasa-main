// ASSETS
import starIsOn from '../../assets/images/rating-star-on.svg'
import starIsOff from '../../assets/images/rating-star-off.svg'
import Styles from './rating.module.scss'

function Rating(props) {
  const starsRating = props.rating
  // Count stars
  const countRating = Number(starsRating)
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  // RENDER
  return (
    <div className={Styles.rating_container}>
      {stars.map((star) =>
        star > countRating ? (
          <img key={star} src={starIsOff} className={Styles.rating_off} />
        ) : (
          <img key={star} src={starIsOn} className={Styles.rating_on} />
        )
      )}
    </div>
  )
}

export default Rating