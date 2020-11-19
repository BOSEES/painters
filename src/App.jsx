import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import styles from "./App.module.css";
import Login from "./components/login/login";
import Painters from "./components/painters/painters";
import Register from "./components/register/register";
import Mypage from "./components/mypage/mypage";

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login authService={authService}/>
            </Route>
            <Route path="/painters">
              <Painters />
            </Route>
            <Route path="/register">
              <Register />
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