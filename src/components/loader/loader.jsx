// ASSETS
import loaderIco from '../../assets/ico/kasa-ico.svg'
import Styles from './loader.module.scss'

function Loader() {
  return (
    <main className={Styles.loader_container}>
      <div className={Styles.loader_container}>
        <div className={Styles.loader_progress}></div>
        <img src={loaderIco} className={Styles.loader_ico} />
        <p>Loading ...</p>
      </div>
    </main>
  )
}

export default Loader