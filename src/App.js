import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import Header from "./components/Header";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/allbeers"
          render={(props) => <AllBeers {...props} />}
        />
        <Route
          exact
          path="/randombeer"
          render={(props) => <RandomBeer {...props} />}
        />
        <Route
          exact
          path="/newbeer"
          render={(props) => <NewBeer {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
