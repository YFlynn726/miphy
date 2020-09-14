import React, { Component } from "react";
import Footer from "../Footer/footer";
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div role="main" className="main-landing">
        <div className="intro">
          <h1>Looking for memes?</h1>
        </div>
        <section className="landingBox">
          <div className="landingBox-content">
            <h2>Search or Create your own memes</h2>{" "}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Landing;
