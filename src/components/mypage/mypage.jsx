import React from "react";
import styles from "./mypage.module.css";
import SideBarMenu from "../side_bar_menu/side_bar_menu";
import Status from "../status/status";

const Mypage = () => {
  return(
    <div className={styles.container}>
      <SideBarMenu />
      <Status />
    </div>
  )
}

export default Mypage;