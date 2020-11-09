import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header className={styles.header}>
      <Link className={styles.title} to="/painters">Painters</Link>
      <div className={styles.buttons}>
        <Link className={styles.button} to="/register">등록하기</Link>
        <Link className={styles.button} to="/mypage">마이페이지</Link>
      </div>
    </header>
  )
}

export default Header;