import React, { useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import styles from "./App.module.css";
import Login from "./components/login/login";
import Painters from "./components/painters/painters";
import Register from "./components/register/register";
import Mypage from "./components/mypage/mypage";

function App({authService}) {
  const [cars, setCars] = useState([
    {
      id: 1,
      Number: "1111",
      Maker: "hyundai",
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

  const addCar = (car) => {
    const updated = [...cars, car];
    setCars(updated);
  };

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route path="/painters">
            <Painters addCar={addCar} cars={cars}/>
          </Route>
          <Route path="/register">
            <Register addCar={addCar}/>
          </Route>
          <Route path="/mypage">
            <Mypage authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;