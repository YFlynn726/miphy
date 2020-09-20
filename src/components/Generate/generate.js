import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./generate.css";

export default class Generate extends Component {
  state = {
    selectedFile: null,
    upperText: "",
    lowerText: "",
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

  changeTopInput(upperText) {
    this.setState({ upperText });
  }
  changeBottomInput(lowerText) {
    this.setState({ lowerText });
  }

  render() {
    return (
      <main className="generate">
        <Nav />
        <section className="generateSection">
          <input
            type="file"
            onChange={this.uploadHandler}
            className="fileType"
            id="loadedImage"
          />

          <br />
          <label htmlFor="topText">Enter top text</label>
          <br />
          <input
            type="text"
            id="topText"
            placeholder="Enter top text"
            onChange={(e) => this.changeTopInput(e.currentTarget.value)}
          />
          <br />
          <div className="outputContent">
            <img
              id="target"
              alt="userImage"
              src={this.state.selectedFile}
            ></img>
            <h2 className="memeText top">{this.state.upperText}</h2>
            <h2 className="memeText bottom">{this.state.lowerText}</h2>
          </div>
          <br />
          <label htmlFor="bottomText">Enter bottom text</label>
          <br />
          <input
            type="text"
            id="bottomText"
            placeholder="Enter bottom text"
            onChange={(e) => this.changeBottomInput(e.currentTarget.value)}
          />
        </section>
      </main>
    );
  }
}
