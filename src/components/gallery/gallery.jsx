import Card from '../card/card'

import Styles from './gallery.module.scss'

function Gallery(props) {
  const { logements } = props
  if (!logements) {
    return null
  }
  return (
    <div className={Styles.gallery}>
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          thumb={logement.cover}
        />
      ))}
    </div>
  )
}

export default Gallery
