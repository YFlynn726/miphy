import React, { Component } from "react";
import Footer from "../Footer/footer";
import Nav from "../Nav/Nav";
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div role="main" className="main-landing">
        <Nav />
        <div className="intro">
          <p>Looking for memes?</p>
        </div>
        <div className="landingBox-content">
          <p>Search or Create your own memes</p>{" "}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Landing;
