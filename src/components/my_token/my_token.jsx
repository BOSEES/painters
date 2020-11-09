import React from "react";
import styles from "./my_token.module.css";

const MyToken = () => {
  return(
    <>
    <h2>토큰 전송하기</h2>
    <form className={styles.form}>
      <b className={styles.inputTitle}>보낼 토큰</b>
      <input className={styles.inputToken} type="text" placeholder="예:10"/>
      <br/>
      <b className={styles.inputTitle}>보낼 주소</b>
      <input className={styles.inputAddress} type="text" placeholder="예:0x276159d8986dBEEE8bFd5C79cb582AA24EB43662"/>
      <input className={styles.inputButton} type="submit" value="보내기"/>
    </form>
    </>
  )
}

export default MyToken;