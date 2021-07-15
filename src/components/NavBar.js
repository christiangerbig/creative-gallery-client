import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/tribar-sm.png";

const NavBar = ({menuNumber, onHomeClicked, onAboutClicked, onProjectsClicked, onContactClicked}) => {
  return (
    <div>
      <nav>
        <div className="navbarContainer">
          <div onClick={onHomeClicked}>
            <Link to={{pathname: "/"}}> <img src={logo} alt="app logo" className="logo"/> </Link>
          </div>
          <div className="navLinkContainer" onClick={onAboutClicked}>
            <Link to={{pathname: "/about"}} className={(menuNumber === 1) ? "navLink textEnlighted" : "navLink"}> About </Link>
          </div>
          <div className="navLinkContainer" onClick={onProjectsClicked}>
            <Link to={{pathname: "/projects"}} className={(menuNumber === 2) ? "navLink textEnlighted" : "navLink"} id="projectsLink"> Gallery </Link>
          </div>
          <div className="navLinkContainer" onClick={onContactClicked}>
            <Link to={{pathname: "/contact"}} className={(menuNumber === 3) ? "navLink textEnlighted" : "navLink"}> Contact </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;