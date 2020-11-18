import React from "react";
import styles from "./login.module.css";

const Login = ({authService}) => {
  const onLogin = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(console.log);
  }

  return(
    <div className={styles.home}>
      <div className={styles.login}>
        <h1 className={styles.header}>
          Painters
        </h1>
        <h1 className={styles.title}>로그인 하기</h1>
        <ul className={styles.ul}>
          <li className={styles.btnlist}>
            <button className={`${styles.btn} ${styles.google}`}  onClick={onLogin}>Google</button>
          </li>
          <li className={styles.btnlist}>
            <button className={`${styles.btn} ${styles.github}`} onClick={onLogin}>Github</button>
          </li>
        </ul>
        <h3 className={styles.footer}>
          code your bosees.
        </h3>
      </div>
    </div>
  )
}

export default Login;