import { useState } from 'react'

import Styles from './collapse.module.scss'
import downArrow from '../../assets/images/downArrow.svg'

function Collapse(props) {
  const { id, title, content } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleCollapse = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={Styles.collapse_container}>
      <div className={Styles.collapse_btn}>
        <h2 className={Styles.collapse_title}>{title}</h2>
        <button
          id={id}
          className={Styles.collapse_btnArrow}
          data-opened={isOpen}
          onClick={(e) => handleCollapse(e)}
        >
          <img src={downArrow} />
        </button>
      </div>
      <p data-opened={isOpen} className={Styles.collapse_text}><span>{content}</span></p>
    </div>
  )
}

export default Collapse