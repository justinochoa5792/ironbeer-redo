import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import AllBeers from "./components/AllBeers";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/allbeers"
          render={(props) => <AllBeers {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
