import React from "react";
import styles from "./side_bar_menu.module.css";

const SideBarMenu = () => {
  return(
    <div className={styles.sideBarMenu}>
        <img className={styles.image} src="/images/car.png" alt="profile image"/>
        <h1 className={styles.name}>유저 네임</h1>
        <p className={styles.myToken}>보유 토큰 : 100 PTT</p>
        <h2>내 컬러데이터 시편 현황</h2>
        <hr className={styles.colorBar1}/>
        <p>등록한 차량 현황</p>
        <p>등록한 시편 현황</p>
        <h2>토큰 관리</h2>
        <hr className={styles.colorBar2}/>
        <p>내 토큰 현황</p>
        <p>트랜잭션 리스트</p>
      </div>
  )
}

export default SideBarMenu;