import React, { Component } from "react";
import Nav from "../Nav/Nav";

export default class Search extends Component {
  state = {
    items: [],
    isLoaded: false,
    searchMeme: "",
    filteredItems: [],
  };

  /* handleInputChange = (event) => {
    this.setState({
      searchMeme: event.target.value,
    });
    console.log(event.target.value);
  };
*/
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
      let filteredMemes = this.state.filteredItems.filter((item) => {
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
    /*let filteredMemes = this.state.items.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.state.searchMeme.toLowerCase());
      });
      console.log(filteredMemes);
  let { items } = this.state.filteredItems;
   if (!isLoaded) {
        return <div>Loading...</div>;
      } */

    let memes = [];
    memes =
      this.state.filteredItems.length > 0 ? (
        this.state.filteredItems.map((item) => (
          <img key={item.id} src={item.url} alt="" />
        ))
      ) : (
        <p>No memes found</p>
      );

    return (
      <div className="Search">
        <Nav />
        <h2>Search Meme</h2>
        <form
          className="search-form"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input
            type="text"
            name="search"
            // value={this.state.searchMeme}
            // onChange={this.handleInputChange}
            className="search-input"
          />
          <button type="submit" className="submit-btn">
            Search
          </button>
        </form>

        <div className="gallery">{memes}</div>
      </div>
    );
  }
}

/* <div>
          {filteredMemes.map((item) => (
            <img key={item.id} src={item.url} alt="" />
          ))}
        </div>
        */

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
