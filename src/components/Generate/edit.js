import React from "react";

function Edit() {
    changeTopInput(upperText) {
        this.setState({ upperText });
      }
      changeBottomInput(lowerText) {
        this.setState({ lowerText });
      }
  return (
    <section>
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
        <img id="target" alt="userImage" src={this.state.selectedFile}></img>
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
  );
}
export default Edit;
