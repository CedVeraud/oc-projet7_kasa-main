import React, { useState, useEffect } from "react"

import Arrow from '../../assets/images/carousel-arrow.svg'
import Styles from './carousel.module.scss'

function Carousel(props) {
  const [index, setIndex] = useState(0)
  const sliderPictures = props.pictures

  useEffect(() => {
    const lastIndex = sliderPictures?.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, sliderPictures])

  let carouselNav = ''
  if (sliderPictures?.length > 1) {
    carouselNav = <>
      <p id="counter" className={Styles.carousel_nav_counter}>{index + 1}/{sliderPictures?.length}</p>
      <button id="prev" className={Styles.carousel_nav_prev} onClick={() => setIndex(index - 1)}>
        <img src={Arrow} />
      </button>
      <button id="next" className={Styles.carousel_nav_next} onClick={() => setIndex(index + 1)}>
        <img src={Arrow} />
      </button>
    </>
  }

  return (
    <section className={Styles.carousel}>

      <div className={Styles.carousel_container}>
        {sliderPictures && sliderPictures.length > 0 && sliderPictures.map((logement, logementIndex) => {
          let displayStatus = Styles.nextSlide
          if (logementIndex === index && sliderPictures?.length === 1) {
            displayStatus = Styles.activeSlide
          }
          if (logementIndex === index) {
            displayStatus = Styles.activeSlide
          }
          if (sliderPictures?.length > 1 &&
            (logementIndex === index - 1 ||
              (index === 0 && logementIndex === sliderPictures.length - 1))
          ) {
            displayStatus = Styles.lastSlide
          }

          return (
            <div key={logementIndex} className={displayStatus}>
              <img
                className={Styles.carousel_image} key={logementIndex} src={logement} alt="Logement"
              />
            </div>
          )
        })}

        <nav className={Styles.carousel_nav}>
          {carouselNav}
        </nav>

      </div>
    </section>
  )
}

export default Carousel