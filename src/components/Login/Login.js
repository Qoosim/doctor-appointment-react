import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./login.module.css";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(emailRef.current.value)) {
      errors.message = "This is not a valid email format";
      emailRef.current.focus();
    }

    if (passwordRef.current.value < 6 || passwordRef.current.value > 40) {
      errors.message = "Password must be between 6 and 40 characters";
      passwordRef.current.focus();
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate);
    setIsSubmit(true);
  };

  return (
    <section className={styles.loginSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.heading}>
          <h1>Login</h1>
          <hr className={styles.line} />
        </div>
        <div>
          {Object.keys(errors).length === 0 && isSubmit ? (
            <p>Login successfully</p>
          ) : (
            <p>{errors.message}</p>
          )}
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className={styles.inputField}
                required
              />
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
            </div>
            <div className={styles.formGroup}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                ref={passwordRef}
                className={styles.inputField}
                required
              />
              <label htmlFor="password" className={styles.inputLabel}>
                Password
              </label>
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className={styles.eyeIcon} />
                ) : (
                  <FaEyeSlash className={styles.eyeIcon} />
                )}
              </button>
            </div>
            <div className={styles.loginBtn}>
              <button type="submit">Login</button>
            </div>
            <div className={styles.linkToRegister}>
              <p>
                Have no account yet?
                <Link to="/register" className={styles.link}>
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
