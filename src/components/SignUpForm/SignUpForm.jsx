import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa"; // Sử dụng các icon Google và Apple từ react-icons
import styles from "./SignUpForm.module.css";

const SignupForm = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.overlay}></div>
          <div className={styles.backgroundImage}>
            <p className={styles.caption}>
              ROOM CHAT - KẾT NỐI MỌI NGƯỜI, MỌI NƠI
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>Create an account</h1>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={styles.input}
            />
            <input type="email" placeholder="Email" className={styles.input} />
            <input
              type="password"
              placeholder="Enter your password"
              className={styles.input}
            />

            <div className={styles.checkboxContainer}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" className={styles.checkboxLabel}>
                I agree to the Terms & Conditions
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Create account
            </button>

            <div className={styles.orText}>
              <span className={styles.orLine}></span> Or register with{" "}
              <span className={styles.orLine}></span>
            </div>

            <div className={styles.socialButtons}>
              <button className={styles.socialButton}>
                <FaGoogle className={styles.icon} />
                Google
              </button>
              <button className={styles.socialButton}>
                <FaApple className={styles.icon} />
                Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
