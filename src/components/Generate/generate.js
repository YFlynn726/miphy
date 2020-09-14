import React, { Component } from "react";
import "./generate.css";

export default class Generate extends Component {
  state = {
    selectedFile: null,
  };

  uploadHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ selectedFile: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    return (
      <main className="generate">
        <section>
          <h1>Generate Component</h1>

          <input
            type="file"
            onChange={this.uploadHandler}
            className="fileType"
            id="loadedImage"
          />
          <br />
          <label htmlFor="topText">Enter top text</label>
          <br />
          <input type="text" id="topText" />
          <img id="target" alt="" src={this.state.selectedFile}></img>
          <br />
          <label htmlFor="bottomText">Enter bottom text</label>
          <br />
          <input type="text" id="bottomText" />
        </section>
      </main>
    );
  }
}
