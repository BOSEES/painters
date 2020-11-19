import React, { useState, useEffect } from "react";
import styles from "./painters.module.css";
import Search from "../search/search";
import Parts from "../parts/parts";
import Header from "../header/header";
import Footer from "../footer/footer";

const Painters = ({ cars }) => {
  return(
    <div>
    <Header />
    <section className={styles.section}>
      <div className={styles.search}>
        <Search cars={cars}/>
      </div>
      <div>
        <Parts cars={cars}/>
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Painters;