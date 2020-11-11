import React from "react";
import styles from "./car_detail.module.css";
import ColorData from "../color_data/color_data";

const CarDetail = ({car}) => {
  return(
    <div className={styles.container}>
      <div className={styles.parts}>
        <button type="submit" className={styles.part}>Hood</button>
        <button type="submit" className={styles.part}>FrontBumper</button>
        <button type="submit" className={styles.part}>Fender_FL</button>
        <button type="submit" className={styles.part}>Fender_FR</button>
        <button type="submit" className={styles.part}>Fender_RL</button>
        <button type="submit" className={styles.part}>Fender_RR</button>
        <button type="submit" className={styles.part}>Door_FL</button>
        <button type="submit" className={styles.part}>Door_FR</button>
        <button type="submit" className={styles.part}>Door_RL</button>
        <button type="submit" className={styles.part}>Door_RR</button>
        <button type="submit" className={styles.part}>Trunk</button>
        <button type="submit" className={styles.part}>RearBumper</button>
        <img className={styles.image} src="/images/car.png" alt="car"/>
      </div>
      <div className={styles.metadata}>
        <h2 className={styles.title}>차량 번호 : {car.Number}</h2>
        <h2 className={styles.brand}>제조사 : {car.Brand}</h2>
        <h2 className={styles.name}>차종 : {car.Name}</h2>
        <h2 className={styles.name}>컬러 코드 : {car.Color}</h2>
        <hr></hr>
        <ColorData car={car}/>
      </div>
    </div>
  )
}

export default CarDetail;