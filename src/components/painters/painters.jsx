import React, { useState, useEffect } from "react";
import styles from "./painters.module.css";
import Search from "../search/search";
import Parts from "../parts/parts";

const Painters = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      Number: "1111",
      Brand: "hyundai",
      Name: "sonata",
      Color:"A5J",
      parts:{
        A: "Hood",
        B: "FrontBumper",
        C: "Fender_FL",
        D: "Fender_FR",
        E: "Fender_RL",
        F: "Fender_RR",
        G: "Door_FL",
        H: "Door_FR",
        I: "Door_RL",
        J: "Door_RR",
        K: "Trunk",
        L: "RearBumper",
      }
    },
    {
      id: 2,
      Number: "2222",
      Brand: "deawoo",
      Name: "moning",
      Color:"A5J",
      parts:{
        A: "Hood",
        B: "FrontBumper",
        C: "Fender_FL",
        D: "Fender_FR",
        E: "Fender_RL",
        F: "Fender_RR",
        G: "Door_FL",
        H: "Door_FR",
        I: "Door_RL",
        J: "Door_RR",
        K: "Trunk",
        L: "RearBumper",
      }
    },
    {
      id: 3,
      Number: "3333",
      Brand: "nissan",
      Name: "gtr",
      Color:"A5J",
      parts:{
        A: "Hood",
        B: "FrontBumper",
        C: "Fender_FL",
        D: "Fender_FR",
        E: "Fender_RL",
        F: "Fender_RR",
        G: "Door_FL",
        H: "Door_FR",
        I: "Door_RL",
        J: "Door_RR",
        K: "Trunk",
        L: "RearBumper",
      }
    },
  ]
  );

  // useEffect();
  return(
    <section className={styles.section}>
      <div className={styles.search}>
        <Search cars={cars}/>
      </div>
      <div>
        <Parts cars={cars}/>
      </div>
    </section>
  )
}

export default Painters;