import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
    <>
      <div className={styles.heading}>
        <h3>Sign Up</h3>
        <hr />
      </div>
      <p>
        {
          Object.keys(errors).length === 0 && isSubmit ? (
            <div>Account created successfully</div>
          ) : (
            <div>{errors.message}</div>
          )
        }
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text" 
            id="name" 
            ref={nameRef}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'} 
            id="password"
            ref={passwordRef}
            className={styles.inputField}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            { showPassword ? <FaEye /> : <FaEyeSlash /> }
          </button>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            ref={passwordConfirmRef}
            className={styles.inputField}
            required
          />
          <button
            type="button"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
          >
            { showPasswordConfirm ? <FaEye /> : <FaEyeSlash /> }
          </button>
        </div>
        <div className={styles.submitBtn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default Register;
