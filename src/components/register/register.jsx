import React, { useState } from "react";
import styles from "./register.module.css";
import DropDown from "../dropdown/dropdown";

const Register = ({addCar}) => {
  const [cars, setCars] = useState();

  return(
    <div className={styles.register}>
      <h1>차량 등록하기</h1>
      <DropDown onAdd={addCar}/>
    </div>
  )
}

export default Register;