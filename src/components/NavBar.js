import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  // const myRef = React.createRef();
  return (
    <>
      <nav>
        <div className="navbarContainer">
          <div className="navLinkContainer">
            <Link to={{ pathname: "/" }} class="navLink"> Home </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{ pathname: "/about" }} class="navLink"> About </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{ pathname: "/projects" }} class="navLink"> Projects </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{ pathname: "/contact" }} class="navLink"> Contact </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;