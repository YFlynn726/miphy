import React, { Component } from "react";
import "./App.css";
import Generate from "../Generate/generate";
import Search from "../Search/search";
import Landing from "../Landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { data: false };
  // }

  // componentDidMount() {
  //   fetch("https://api.imgflip.com/get_memes", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         data: data.data.memes,
  //       });
  //       console.log(this.state.data);
  //     })
  //     .catch((error) => {
  //       console.log("Request failure: ", error);
  //     });
  // }

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
