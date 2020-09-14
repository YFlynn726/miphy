import React, { Component } from "react";
//import "../App.css";

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h2>Search Meme</h2>
        <form className="search-form">
          <input type="text" name="search" className="search-input" />
          <button type="submit" className="submit-btn">
            Search
          </button>
        </form>
      </div>
    );
  }
}

function search() {
  const gallery = document.querySelector(".gallery");
  const searchInput = document.querySelector(".search-input");
  const submitButton = document.querySelector(".submit-btn");
  let searchValue;

  async function memeImages() {
    const dataFetch = await fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await dataFetch.json();
    console.log(data);
    data.data.memes.forEach((meme) => {
      console.log(meme);
    });
  }
  memeImages();
  return (
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
  );
}
