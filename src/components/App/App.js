import React, { Component } from "react";
import "./App.css";
import Generate from "../Generate/generate";
import Search from "../Search/search";
import Landing from "../Landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="Main">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/Search" component={Search} />
              <Route path="/Generate" component={Generate} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
