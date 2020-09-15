// import React, { Component } from "react";
// import "./App.css";
// import Nav from "./components/Nav";
// import Generate from "./components/generate";
// //import Search from "./components/search";
// import LandingPage from "./components/landingpage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }

//   componentDidMount() {
//     fetch("https://api.imgflip.com/get_memes", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({
//           isLoaded: true,
//           items: data.data.memes,
//         });
//         console.log(this.state.items);
//       })
//       .catch((error) => {
//         console.log("Request failure: ", error);
//       });
//   }

//   render() {
//     let { isLoaded, items } = this.state;
//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <div className="App">
//           <Router>
//             <div className="App">
//               <Nav />
//               <Switch>
//                 <Route exact path="/Home" component={LandingPage} />
//                 {/* <Route path="/Search" component={Search} /> */}
//                 <Route exact path="/Generate" component={Generate} />
//               </Switch>
//             </div>
//           </Router>

//           <h2>Miphy</h2>
//           <form className="search-form">
//             <input type="text" name="search" className="search-input" />
//             <button type="submit" className="submit-btn">
//               Search
//             </button>
//           </form>
//           <ul>
//             {items.map((item) => (
//               <img key={item.id} src={item.url} alt="" />
//             ))}
//             ;
//           </ul>
//         </div>
//       );
//     }
//     //   return (
//     //     <React.Fragment>
//     //       <Router>
//     //         <div className="App">
//     //           <Nav />
//     //           <Switch>
//     //             <Route exact path="/Home" component={LandingPage} />

//     //             {/* <Route path="/Search" component={Search} /> */}
//     //             <Route path="/Generate" component={Generate} />
//     //           </Switch>
//     //         </div>
//     //       </Router>
//     // <div className="App">
//     //   <h2>Miphy</h2>
//     //   <form className="search-form">
//     //     <input type="text" name="search" className="search-input" />
//     //     <button type="submit" className="submit-btn">
//     //       Search
//     //     </button>
//     //   </form>
//     //   <main>
//     // <div className="gallery">{[1, 2, 3]}</div>
//     //{" "}
//     //</main>
//     //{" "}
//     //</div>;
//     //     </React.Fragment>
//     //   );
//   }
// }

// export default App;
