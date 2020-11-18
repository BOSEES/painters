import React, { useState } from "react";
import styles from "./register.module.css";
import DropDown from "../dropdown/dropdown";
import Header from "../header/header";
import Footer from "../footer/footer";

const Register = () => {
  const [cars, setCars] = useState();

  const addCar = (car) => {
    setCars(cars => {
      const update = {...cars};

    })
  }

  return(
    <>
    <Header />
    <div className={styles.register}>
      <h1>차량 등록하기</h1>
      <DropDown onAdd={addCar}/>
    </div>
    <Footer />
    </>
  )
}

export default Register;