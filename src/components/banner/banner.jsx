import Styles from './banner.module.scss'

function Banner(props) {
  const { img, name, bannerTitle } = props

  return (
    <div className={Styles.banner}>
      <img className={Styles.banner_image} src={img} alt={name} />
      <div className={Styles.banner_overlay}></div>
      {bannerTitle ? <h1 className={Styles.banner_title}>{bannerTitle}</h1> : null}
    </div>
  )
}

export default Banner