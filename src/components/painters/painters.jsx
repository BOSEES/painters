import React, { useState, useEffect } from "react";
import styles from "./painters.module.css";
import Search from "../search/search";
import Parts from "../parts/parts";

const Painters = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      Number: "1111",
      Brand: "hundai",
      Name: "sonata",
      Color:"A5J",
      parts:{
        A: "red",
        B: "blue",
        C: "green",
        D: "black",
        E: "white",
        F: "yello",
        G: "pink",
        H: "pupple",
        I: "grey",
        J: "orange"
      }
    },
    {
      id: 2,
      Number: "2222",
      Brand: "deawoo",
      Name: "moning",
      Color:"A5J",
      parts:{
        A: "red",
        B: "blue",
        C: "green",
        D: "black",
        E: "white",
        F: "yello",
        G: "pink",
        H: "pupple",
        I: "grey",
        J: "orange"
      }
    },
    {
      id: 3,
      Number: "3333",
      Brand: "nissan",
      Name: "gtr",
      Color:"A5J",
      parts:{
        A: "red",
        B: "blue",
        C: "green",
        D: "black",
        E: "white",
        F: "yello",
        G: "pink",
        H: "pupple",
        I: "grey",
        J: "orange"
      }
    },
  ]
  );

  // useEffect();
  return(
    <section>
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