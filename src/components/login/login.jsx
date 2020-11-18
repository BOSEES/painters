import React from "react";
import styles from "./login.module.css";

const Login = ({authService}) => {
  const onLogin = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(console.log);
  }

  return(
    <div className={styles.login}>
      <div className={styles.header}>
        header
      </div>
      <h1 className={styles.title}>login</h1>
      <ul>
        <li>
          <button className={styles.googleBtn} onClick={onLogin}>Google</button>
        </li>
        <li>
          <button className={styles.githubBtn} onClick={onLogin}>Github</button>
        </li>
      </ul>
      <div className={styles.footer}>
        footer
      </div>
    </div>
  )
}

export default Login;