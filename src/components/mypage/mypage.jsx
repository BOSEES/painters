import React from "react";
import styles from "./mypage.module.css";
import SideBarMenu from "../side_bar_menu/side_bar_menu";
import Status from "../status/status";
import Header from "../header/header";
import Footer from "../footer/footer";

const Mypage = () => {
  return(
    <>
    <Header />
    <div className={styles.container}>
      <SideBarMenu />
      <Status />
    </div>
    <Footer />
    </>
  )
}

export default Mypage;