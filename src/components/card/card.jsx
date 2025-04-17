import { Link } from 'react-router-dom'

import Styles from './card.module.scss'

function card(props) {
  const { id, thumb, title } = props
  return (
    <Link className={Styles.card} to={'/logement/' + id}>
      <div className={Styles.card_container}>
        <img className={Styles.card_image} src={thumb} alt={title} />
        <div className={Styles.card_overlay}></div>
        <h3 className={Styles.card_title}>{title}</h3>
      </div>
    </Link>
  )
}

export default card