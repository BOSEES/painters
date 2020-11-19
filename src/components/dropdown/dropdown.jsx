import React, { useRef } from "react";
import styles from "./dropdown.module.css";

const DropDown = ({addCar}) => {
  const formRef = useRef();
  const numberRef = useRef();
  const makerRef = useRef();
  const carNameRef = useRef();
  const colorRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault(); //리랜더링 방지
    const car = {
      id: Date.now(),
      Number: numberRef.current.value || "",
      Maker: makerRef.current.value || "",
      Name: carNameRef.current.value || "",
      Color: colorRef.current.value || "",
      Hood:[
        {
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
    };

    formRef.current.reset();
    addCar(car);
  }
  return(
        <form ref={formRef}>
          <input ref={numberRef} type="text" className={styles.input} name="Number" placeholder="차량번호를 입력해주세요."/>
          <input ref={makerRef} type="text" className={styles.input} name="Maker" placeholder="제조사를 입력해주세요"/>
          <input ref={carNameRef} type="text" className={styles.input} name="CarName" placeholder="차종을 입력해주세요"/>
          <input ref={colorRef} type="text" className={styles.input} name="Color" placeholder="차량 컬러를 입력해주세요"/>
          <button className={styles.button} onClick={onSubmit}>등록하기</button>
        </form>
  )
}

export default DropDown;