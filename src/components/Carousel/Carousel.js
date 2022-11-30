import React, { useState } from 'react';
//import Carousel from 'react-bootstrap/Carousel';
import { data } from './data';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import styles from './carousel.module.css';

const CarouselDisplay = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
      { data.map((slide, index) => {
        return (
          <div className={index === current ? `${styles.slide} ${styles.active}` : `${styles.slide}`} key={index}>
            { index === current && (
              <img src={slide.image} alt="Test Slider" className={styles.image} />
            )}
          </div>
        )
      })} 
    </section>
  )
}

export default CarouselDisplay;
