import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav role="navigation" className="Nav">
      <h1>
        <Link to="/">Miphy </Link>
      </h1>
      <div className="Login">
        <div className="Header__not-logged-in">
          <Link to="/Search"> Search </Link>
          <span className="Hyph"></span>
          <Link to="/Generate"> Generate </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
