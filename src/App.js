import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./App.css";

import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import Header from "./components/Header";
import NewBeer from "./components/NewBeer";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const renderDeets = async () => {
      const response = await Axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeers(response.data);
    };
    renderDeets();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/allbeers"
          render={(props) => <AllBeers {...props} beers={beers} />}
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
