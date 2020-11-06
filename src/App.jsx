import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/home/home";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/painters">
            <h1>painters</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;