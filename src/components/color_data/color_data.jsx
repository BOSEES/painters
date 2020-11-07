import React from "react";
import styles from "./color_data.module.css";

const ColorData = ({car}) => {
  return(
    <div className={styles.colors}>
        <h3>Color Maker : PPG</h3>
        <h3>Data : 2020. 11. 8</h3>
        <div className={styles.datas}>
          <ul className={styles.dataList}>
            <li className={styles.data}>color 1 :</li>
            <li className={styles.data}>color 2 :</li>
            <li className={styles.data}>color 3 :</li>
            <li className={styles.data}>color 4 :</li>
            <li className={styles.data}>color 5 :</li>
          </ul>
          <ul className={styles.dataList}>
            <li className={styles.data}>color 6 :</li>
            <li className={styles.data}>color 7 :</li>
            <li className={styles.data}>color 8 :</li>
            <li className={styles.data}>color 9 :</li>
            <li className={styles.data}>color 10 :</li>
          </ul>
        </div>
      </div>
  )
}

export default ColorData;