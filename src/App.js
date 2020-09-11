import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Generate from "./components/generate";
//import Search from "./components/search";
import LandingPage from "./components/landingpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: false };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.data.memes,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
  }

  render() {
    console.log(this.state.data[0]);
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/Home" component={LandingPage} />

              {/* <Route path="/Search" component={Search} /> */}
              <Route path="/Generate" component={Generate} />
            </Switch>
          </div>
        </Router>
        <div className="App">
          <h2>Miphy</h2>
          <form className="search-form">
            <input type="text" name="search" className="search-input" />
            <button type="submit" className="submit-btn">
              Search
            </button>
          </form>
          <main>
            <div className="gallery"></div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
