import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleMottoContainer}>
        <h3 className={styles.title}>Stay Healthy</h3>
        <p className={styles.motto}>See your doctor today....</p>
      </div>
      <div className={styles.btnContainer}>
        <Link to="/login">
          <button
            className={styles.loginBtn}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            className={styles.signupBtn}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
