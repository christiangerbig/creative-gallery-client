import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/tribar-sm.png";

const NavBar = ({menuNumber, onNavLinkClicked}) => {
  return (
    <div>
      <nav>
        <div className="navbarContainer">
          <div>
            <Link to={{pathname: "/"}}  onClick={() => onNavLinkClicked(0)}> <img src={logo} alt="app logo" className="logo"/> </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{pathname: "/about"}} className={menuNumber === 1 ? "navLink textEnlighted" : "navLink"} onClick={() => onNavLinkClicked(1)}> About </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{pathname: "/projects"}} className={menuNumber === 2 ? "navLink textEnlighted" : "navLink"} id="projectsLink" onClick={() => onNavLinkClicked(2)}> Gallery </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{pathname: "/contact"}} className={menuNumber === 3 ? "navLink textEnlighted" : "navLink"} onClick={() => onNavLinkClicked(3)}> Contact </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;