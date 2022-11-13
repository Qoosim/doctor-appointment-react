import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleMottoContainer}>
        <h3 className={styles.title}>Stay Healthy</h3>
        <p className={styles.motto}>See your doctor today....</p>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.signupBtn}>Register</button>
      </div>
    </div>
  )
}

export default Home;
