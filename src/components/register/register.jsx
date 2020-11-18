import React, { useState } from "react";
import styles from "./register.module.css";
import DropDown from "../dropdown/dropdown";

const Register = () => {
  const [cars, setCars] = useState();

  const addCar = (car) => {
    setCars(cars => {
      const update = {...cars};

    })
  }

  return(
    <div className={styles.register}>
      <h1>차량 등록하기</h1>
      <DropDown onAdd={addCar}/>
    </div>
  )
}

export default Register;