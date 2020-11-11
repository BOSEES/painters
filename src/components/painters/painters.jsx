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
      Hood:[{
        ColorNum:"T400",
        gram:"1"
      },
      {
        ColorNum:"T401",
        gram:"1"
      },
      {
        ColorNum:"T402",
        gram:"1"
      },
      {
        ColorNum:"T403",
        gram:"1"
      },
      {
        ColorNum:"T404",
        gram:"1"
      },
      {
        ColorNum:"T405",
        gram:"1"
      },
      {
        ColorNum:"T406",
        gram:"1"
      },
      {
        ColorNum:"T407",
        gram:"1"
      },
      {
        ColorNum:"T408",
        gram:"1"
      },
      {
        ColorNum:"T409",
        gram:"1"
      }
      ],
      FrontBumper:[],
      Fender_FL:[],
      Fender_FR:[],
      Fender_RL:[],
      Fender_RR:[],
      Door_FL:[],
      Door_FR:[],
      Door_RL:[],
      Door_RR:[],
      Trunk:[],
      RearBumper:[]
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