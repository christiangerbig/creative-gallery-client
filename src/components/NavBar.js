import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/tribar-sm.png";

function NavBar(props) {
  return (
    <div>
      <nav>
        <div className="navbarContainer">
          <div onClick={props.onHomeClicked}>
            <Link to={{ pathname: "/" }}> <img src={logo} alt="app logo" className="logo"/> </Link>
          </div>
          <div className="navLinkContainer" onClick={props.onAboutClicked}>
            <Link to={{ pathname: "/about" }} className={(props.menuNumber === 1) ? "navLink textEnlighted" : "navLink"}> About </Link>
          </div>
          <div className="navLinkContainer" onClick={props.onProjectsClicked}>
            <Link to={{ pathname: "/projects" }} className={(props.menuNumber === 2) ? "navLink textEnlighted" : "navLink"} id="projectsLink"> Projects </Link>
          </div>
          <div className="navLinkContainer" onClick={props.onContactClicked}>
            <Link to={{ pathname: "/contact" }} className={(props.menuNumber === 3) ? "navLink textEnlighted" : "navLink"}> Contact </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;