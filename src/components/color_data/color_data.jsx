import React from "react";
import styles from "./color_data.module.css";

const ColorData = ({car}) => {
  return(
    <div className={styles.colors}>
        <h3>Color Maker : PPG</h3>
        <h3>Data : 2020. 11. 8</h3>
        <div className={styles.datas}>
          <ul className={styles.dataList}>
            <li className={styles.data}>{car.Hood[0].ColorNum}:{car.Hood[0].gram}</li>
            <li className={styles.data}>{car.Hood[1].ColorNum}:{car.Hood[1].gram}</li>
            <li className={styles.data}>{car.Hood[2].ColorNum}:{car.Hood[2].gram}</li>
            <li className={styles.data}>{car.Hood[3].ColorNum}:{car.Hood[3].gram}</li>
            <li className={styles.data}>{car.Hood[4].ColorNum}:{car.Hood[4].gram}</li>
          </ul>
          <ul className={styles.dataList}>
            <li className={styles.data}>{car.Hood[5].ColorNum}:{car.Hood[5].gram}</li>
            <li className={styles.data}>{car.Hood[6].ColorNum}:{car.Hood[6].gram}</li>
            <li className={styles.data}>{car.Hood[7].ColorNum}:{car.Hood[7].gram}</li>
            <li className={styles.data}>{car.Hood[8].ColorNum}:{car.Hood[8].gram}</li>
            <li className={styles.data}>{car.Hood[9].ColorNum}:{car.Hood[9].gram}</li>
          </ul>
        </div>
      </div>
  )
}

export default ColorData;