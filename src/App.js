import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Generate from "./components/generate";
import Search from "./components/search";
import LandingPage from "./components/landingpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/Home" component={LandingPage} />

          <Route path="/Search" component={Search} />
          <Route path="/Generate" component={Generate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
