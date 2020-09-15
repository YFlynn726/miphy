import React, { Component } from "react";
//import "../App.css";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
      searchMeme: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    console.log(this.state.searchMeme);
    // const { searchedText } = event.target;
    // console.log(searchedText.value);
  };

  handleInputChange = (event) => {
    this.setState({
      searchMeme: event.target.value,
    });
    console.log(event.target.value);
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
        });
        console.log(this.state.items);
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
  }
  render() {
    let filteredMemes = this.state.items.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchMeme.toLowerCase());
    });
    console.log(filteredMemes);
    let { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Search">
          <h2>Search Meme</h2>
          <form
            className="search-form"
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <input
              type="text"
              name="search"
              // value={this.state.searchMeme}
              onChange={this.handleInputChange}
              className="search-input"
            />
            <button type="submit" className="submit-btn">
              Search
            </button>
          </form>

          <div className="gallery">
            {items.map((item) => (
              <img key={item.id} src={item.url} alt="" />
            ))}
          </div>
          <div>
            {filteredMemes.map((item) => (
              <img key={item.id} src={item.url} alt="" />
            ))}
          </div>
        </div>
      );
    }
  }
}

// function search() {
//   const gallery = document.querySelector(".gallery");
//   const searchInput = document.querySelector(".search-input");
//   const submitButton = document.querySelector(".submit-btn");
//   let searchValue;

//   async function memeImages() {
//     const dataFetch = await fetch("https://api.imgflip.com/get_memes", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     });
//     const data = await dataFetch.json();
//     console.log(data);
//     data.data.memes.forEach((meme) => {
//       console.log(meme);
//     });
//   }
//   memeImages();
//   return (
//     <div className="App">
//       <h2>Miphy</h2>
//       <form className="search-form">
//         <input type="text" name="search" className="search-input" />
//         <button type="submit" className="submit-btn">
//           Search
//         </button>
//       </form>
//       <main>
//         <div className="gallery"></div>
//       </main>
//     </div>
//   );
// }
