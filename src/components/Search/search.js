import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Search.css";

export default class Search extends Component {
  state = {
    items: [],
    isLoaded: false,
    searchMeme: "",
    filteredItems: [],
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          items: data.data.memes,
          filteredItems: data.data.memes,
        });
        console.log(this.state.filteredItems);
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      filteredItems: this.state.items,
    });
    const { search } = event.target;
    console.log(search.value);
    if (search.value.length > 0) {
      let filteredMemes = this.state.items.filter((item) => {
        return item.name.toLowerCase().includes(search.value.toLowerCase());
      });
      console.log(filteredMemes);
      this.setState({
        filteredItems: filteredMemes,
      });
    }
    console.log(this.state.filteredItems);
  };

  render() {
    let memes = [];

    memes =
      this.state.filteredItems.length > 0 ? (
        this.state.filteredItems.map((item) => (
          <div className="img-wrap" key={item.id}>
            <img key={item.id} src={item.url} alt="" />
          </div>
        ))
      ) : (
        <p>No memes found</p>
      );

    return (
      <div className="Search">
        <Nav />
        <h2 className="title">Search A Meme</h2>
        <form
          className="search-form"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input type="text" name="search" className="search-input" />
          <button type="submit" className="submit-btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>

        <div className="img-grid">{memes}</div>
      </div>
    );
  }
}
