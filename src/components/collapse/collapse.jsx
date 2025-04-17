import Styles from './collapse.module.scss'

function Collapse(props) {
  const { about } = props
  if (!about) {
    return null
  }
  return (
    console.log(about),
    <div className={Styles.gallery}>
      {about.map((about) => (
        <Collapse
          key={about.id}
          id={about.id}
          title={about.title}
          content={about.content}
        />
      ))}
    </div>
  )
}
export default Collapse