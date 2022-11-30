import React from 'react';
// import Carousel from 'react-multi-carousel';
import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import styles from './doctorsList.module.css';
import { socialLinks } from './socialLinks';
import { doctors } from './doctors';

const DoctorsList = () => {

{/*
  const doctorsList = doctors.map((doctor) => (
    <div key={doctor.id}>
      <Link
        to={`/doctors/${doctor.id}`}
        className={styles.doctorSingle}
        state={doctor}
      >
        <div className="d-flex flex-column align-items-center mb-5">
          <img
            src={doctor.photo}
            alt={doctor.name} 
            className={styles.img}
          />
          <h5
            className={`text-dark p-4 ${styles.border}`}
          >
            {doctor.name}
          </h5>
          <p className="text-secondary">{doctor.desc}</p>
          <ul className="d-flex">
            {socialLinks.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  eslint-disable-next-line react/jsx-no-target-blank
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener"
                    className="m-1 text-secondary"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Link>
    </div>
  ));
*/}
    
  return (
    <>
      <Sidebar />
      <div className={styles.doctorsContainer}>
        <div className={styles.header}>
          <h3>LIST OF DOCTORS</h3>
          <p className="text-secondary">Please select a doctor</p>
        </div>
        <Carousel slide={false}>
          { doctors.map((doctor) => {
            console.log(doctor)
            return (
              <div key={doctor.id}>
                <Link
                  to={`/doctors/${doctor.id}`}
                  className={styles.doctorSingle}
                  state={doctor}
                >
                  <Carousel.Item>
                    <div className="d-flex flex-column align-items-center mb-5">
                      <img
                        src={doctor.photo}
                        alt={doctor.name} 
                        className={styles.img}
                      />
                      <Carousel.Caption>
                        <h5
                          className={`text-dark p-4 ${styles.border}`}
                        >
                          {doctor.name}
                        </h5>
                        <p className="text-secondary">{doctor.desc}</p>
                        <ul className="d-flex">
                          {socialLinks.map((link) => {
                            const { id, url, icon } = link;
                            return (
                              <li key={id}>
                                {/*eslint-disable-next-line react/jsx-no-target-blank*/}
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener"
                                  className="m-1 text-secondary"
                                >
                                  {icon}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                </Link>
              </div> 
            )
          })}
        </Carousel>
      </div>
    </>
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

*/}

{/*
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

