import React, { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import Sidebar from '../Sidebar/Sidebar';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './doctorsList.module.css';
import { socialLinks } from './socialLinks';
import { doctors } from './doctors';

const DoctorsList = ({ slides }) => {
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
    <section className={styles.mainWrapper}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.doctorsContainer}>
        <div className={styles.header}>
          <h3>LIST OF DOCTORS</h3>
          <p>Please select a doctor</p>
        </div>
        <div className={styles.docInfoContainer}>
          <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
          <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
          { doctors.map((doctor, index) => (
            <div
              className={index === current ? `${styles.slide} ${styles.active}` : `${styles.slide}`}
              key={index}
            >
              { index === current && (
                <div className={styles.docSlideContainer}>
                  <Link
                    to={`/doctors/${doctor.id}`}
                    className={styles.doctorSingle}
                    state={doctor}
                  >
                    <img
                      src={doctor.photo}
                      alt={doctor.name} 
                      className={styles.image}
                    />
                  </Link>
                  <h5 className={styles.docName}>{doctor.name}</h5>
                  <p className={styles.description}>{doctor.desc}</p>
                  <ul className={styles.ulList}>
                    {socialLinks.map((link) => {
                      const { id, url, icon } = link;
                      return (
                        <li key={id}>
                          {/* eslint-disable-next-line react/jsx-no-target-blank */}
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener"
                            className={styles.icons}
                          >
                            {icon}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsList;

{/*
const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 767,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  }

<Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {doctorsList}
        </Carousel>

*/}
