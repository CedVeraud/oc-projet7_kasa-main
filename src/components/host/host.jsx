import Styles from './host.module.scss'

function Host(props) {

  const hostName = props.name
  const hostPicture = props.picture

  return (
    <div className={Styles.host}>
      <div className={Styles.host_container}>
        <div className={Styles.host_name}>
          {hostName && hostName.length > 0 && hostName.map((splitName, i) => (
            <p key={i} className={Styles.host_name}>
              {splitName?.split(" ")[0]}
              {splitName?.split(" ")[1]}<br />
            </p>
          ))}
        </div>

        <img
          className={Styles.host_picture}
          src={hostPicture}
          alt=" "
        />

      </div>
    </div>
  )
}

export default Host