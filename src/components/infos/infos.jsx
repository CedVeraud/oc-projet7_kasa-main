import Styles from './infos.module.scss'

function Infos(props) {

  const infosTitle = props.title
  const infosLocation = props.location

  const infosTag = props.tag

  return (
    <div className={Styles.infos_container}>
      <h1 className={Styles.infos_title}>
        {infosTitle}
      </h1>

      <p className={Styles.infos_location}>
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