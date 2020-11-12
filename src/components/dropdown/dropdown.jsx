import React from "react";
import styles from "./dropdown.module.css";

const DropDown = () => {
  return(
        <form>
          <select className={styles.maker} name="maker" >
            <option>제조사</option>
            <option value="a">현대</option>
            <option value="b">닛산</option>
            <option value="c">쉐보레</option>
          </select>
          <select id="model" name="model">
            <option>모델</option>
          </select>
          <select className={styles.detail} name="detail">
            <option>상세 모델</option>
          </select>
          <button>검색</button>
        </form>
  )
}

export default DropDown;