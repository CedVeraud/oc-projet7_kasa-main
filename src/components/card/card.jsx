import { Link } from 'react-router-dom'
// ASSETS
import Styles from './card.module.scss'

function card(props) {
  const { id, thumb, title } = props
  //RENDER
  return (
    <Link className={Styles.card} to={'/logement/' + id}>
      <article className={Styles.card_container}>
        <img className={Styles.card_image} src={thumb} alt={title} />
        <div className={Styles.card_overlay}></div>
        <h3 className={Styles.card_title}>{title}</h3>
      </article>
    </Link>
  )
}

export default card