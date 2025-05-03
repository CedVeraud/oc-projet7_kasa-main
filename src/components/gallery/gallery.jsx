import Card from '../card/card'
//ASSETS
import Styles from './gallery.module.scss'

function Gallery(props) {
  const { logements } = props
  // CHECK
  if (!logements) {
    return null
  }
  // RENDER
  return (
    <section className={Styles.gallery}>
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          thumb={logement.cover}
        />
      ))}
    </section>
  )
}

export default Gallery
