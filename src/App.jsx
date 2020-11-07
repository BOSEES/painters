import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/home/home";
import Painters from "./components/painters/painters";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Resister from "./components/resister/resister";
import Mypage from "./components/mypage/mypage";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/painters">
              <Painters />
            </Route>
            <Route path="/resister">
              <Resister />
            </Route>
            <Route path="/mypage">
              <Mypage />
            </Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;