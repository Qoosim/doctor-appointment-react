import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './doctorsList.module.css';

const DoctorsList = () => {
  return (
    <section className={styles.doctorsContainer}>
      <Sidebar />
      <h3>List of Doctors here...</h3>
    </section>
  )
}

export default DoctorsList;
