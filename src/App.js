import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./screens/List";
import Details from "./screens/Details";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
