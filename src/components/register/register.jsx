import React from "react";
import styles from "./register.module.css";
import DropDown from "../dropdown/dropdown";

const Register = () => {


  return(
    <div className={styles.register}>
      <h1>차량 등록하기</h1>
      <DropDown />
    </div>
  )
}

export default Register;