import React, { Component } from "react";
import "../App.css";

export default class Generate extends Component {
  uploadHandler = (event) => {
    console.log(event);
  };

  render() {
    return (
      <main className="generate">
        <section>
          <h1>Generate Component</h1>
          <input type="file" onChange={this.uploadHandler} />
        </section>
      </main>
    );
  }
}
