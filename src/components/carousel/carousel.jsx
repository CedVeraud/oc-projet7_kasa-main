import React, { useState, useEffect } from "react"
import { Hooks } from '../../utils/hooks';
import { useParams } from "react-router-dom"

import Arrow from '../../assets/images/carousel-arrow.svg'
import Styles from './carousel.module.scss'

function Carousel() {
  //// FIND DATA ////
  const dataLogements = Hooks()
  const { logementId } = useParams()
  const currentLogement = dataLogements.find((data) => data.id === logementId)

  //// PUSH DATA ////
  const Slider = []
  Slider.push(currentLogement)
  //
  const [index, setIndex] = useState(0)
  const sliderPictures = Slider[0]?.pictures
  const sliderArray = []
  sliderArray.push(sliderPictures)

  //// USE ////
  useEffect(() => {
    const lastIndex = sliderPictures?.length - 1
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliderPictures]);

  if (sliderPictures?.length === 1) {
    document.getElementById('prev').style.display = 'none'
    document.getElementById('next').style.display = 'none'
    document.getElementById('counter').style.display = 'none'
  }

  return (
    <section className={Styles.carousel}>
      <div className={Styles.carousel_container}>
        {sliderPictures && sliderPictures.length > 0 && sliderPictures.map((logement, logementIndex) => {
          let displayStatus = Styles.nextSlide;
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
          );
        })}

        <div className={Styles.nav_container}>
          <p id="counter" className={Styles.carousel_counter}>{index + 1}/{sliderPictures?.length}</p>
          <button id="prev" className={Styles.carousel_prev} onClick={() => setIndex(index - 1)}>
            <img src={Arrow} />
          </button>
          <button id="next" className={Styles.carousel_next} onClick={() => setIndex(index + 1)}>
            <img src={Arrow} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel