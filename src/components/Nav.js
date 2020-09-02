import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  const logoStyle = {
    color: "white",
    "text-decoration": "none",
  };

  return (
    <nav>
      <Link style={logoStyle} to="/Home">
        <h3>Miphy</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/Search">
          <li>Search</li>
        </Link>
        <Link style={navStyle} to="/Generate">
          <li>Generate</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
