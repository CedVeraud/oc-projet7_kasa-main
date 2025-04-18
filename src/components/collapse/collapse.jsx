import { Link } from 'react-router-dom'

import Styles from './collapse.module.scss'

function Collapse(props) {
  const { id, title, content } = props
  return (
    <Link className={Styles.collapse} to={'/about/' + id}>
      <div className={Styles.collapse_container}>
        <h3 className={Styles.collapse_title}>{title}</h3>
        <div className={Styles.collapse_text}>{content}</div>
      </div>
    </Link>
  )
}
export default Collapse