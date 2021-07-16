import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/tribar-sm.png";

const NavBar = ({menuNumber, onHomeClicked, onAboutClicked, onProjectsClicked, onContactClicked}) => {
  return (
    <div>
      <nav>
        <div className="navbarContainer">
          <div>
            <Link to={{pathname: "/"}}  onClick={onHomeClicked}> <img src={logo} alt="app logo" className="logo"/> </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{pathname: "/about"}} className={(menuNumber === 1) ? "navLink textEnlighted" : "navLink"} onClick={onAboutClicked}> About </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{pathname: "/projects"}} className={(menuNumber === 2) ? "navLink textEnlighted" : "navLink"} id="projectsLink" onClick={onProjectsClicked}> Gallery </Link>
          </div>
          <div className="navLinkContainer">
            <Link to={{pathname: "/contact"}} className={(menuNumber === 3) ? "navLink textEnlighted" : "navLink"} onClick={onContactClicked}> Contact </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;