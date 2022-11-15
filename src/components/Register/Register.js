import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './register.module.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsubmit] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef();


  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit ) {
      console.log("Operation successfulA");
    }
  }, [errors, isSubmit]);

  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (nameRef.current.value === '') {
      errors.message = 'Please, enter your name!';
      nameRef.current.focus();
    }

    if (!regex.test(emailRef.current.value)) {
      errors.message = "This is not a valid email format";
      emailRef.current.focus();
    }

    if (passwordRef.current.value < 6 || passwordRef.current.value > 40) {
      errors.message = "Password must be between 6 and 40 characters";
      passwordRef.current.focus();
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      errors.message = "Passwords do not match"
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate);
    setIsubmit(true);
  }

  return (
    <section className={styles.signupSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.heading}>
          <h1>Sign Up</h1>
          <hr className={styles.line} />
        </div>
        <div>
          {
            Object.keys(errors).length === 0 && isSubmit ? (
              <p>Account created successfully</p>
            ) : (
              <p>{errors.message}</p>
            )
          }
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text" 
                id="name" 
                ref={nameRef}
                className={styles.inputField}
                required
              />
              <label htmlFor="name" className={styles.inputLabel}>Full Name</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className={styles.inputField}
                required
              />
              <label htmlFor="email" className={styles.inputLabel}>Email</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type={showPassword ? 'text' : 'password'} 
                id="password"
                ref={passwordRef}
                className={styles.inputField}
                required
              />
              <label htmlFor="password" className={styles.inputLabel}>Password</label>
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                { showPassword ? <FaEye className={styles.eyeIcon} /> : <FaEyeSlash className={styles.eyeIcon} /> }
              </button>
            </div>
            <div className={styles.formGroup}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="passwordConfirm"
                ref={passwordConfirmRef}
                className={styles.inputField}
                required
              />
              <label htmlFor="passwordConfirm" className={styles.inputLabel}>Password Confirmation</label>
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              >
                { showPasswordConfirm ? <FaEye className={styles.eyeIcon} /> : <FaEyeSlash className={styles.eyeIcon} />}
              </button>
            </div>
            <div className={styles.submitBtn}>
              <button type="submit">Submit</button>
            </div>
            <div className={styles.linkToLogin}>
              <p>
                Already have an account?
                <Link to="/" className={styles.link}>
                  {' '}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register;
