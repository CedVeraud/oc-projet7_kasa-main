import Styles from './host.module.scss'

function Host(props) {

  const firstName = props.hostName
  const hostPicture = props.picture

  return (
    <div className={Styles.host}>
      <div className={Styles.host_container}>
        <div class={Styles.host_name}>
          {firstName && firstName.length > 0 && firstName.map((hostName, i) => (
            <p key={i} className={Styles.host_name}>
              {hostName?.split(" ")[0]}
              {hostName?.split(" ")[1]}
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