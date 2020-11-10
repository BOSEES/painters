import React from "react";
import styles from "./register.module.css";

const Register = () => {
  return(
    <div className={styles.register}>
      <h1>차량 등록하기</h1>
      <div className={styles.registerForm}>
        <form>
          <select className={styles.modal} value="제 조 사" name="maker">
            <option>hyundai</option>
            <option>nissan</option>
            <option>deawoo</option>
          </select>
          <select className={styles.modal} name="model">
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select className={styles.modal} name="detail">
            <option></option>
            <option></option>
            <option></option>
          </select>
          <input type="text"></input>

        </form>
      </div>
    </div>
  )
}

export default Register;