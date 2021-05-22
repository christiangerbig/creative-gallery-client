import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../images/tribar-sm.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {menuNumber: null};
    this.handleHomeClicked = this.handleHomeClicked.bind(this);
    this.handleAboutClicked = this.handleAboutClicked.bind(this);
    this.handleProjectsClicked = this.handleProjectsClicked.bind(this);
    this.handleContactClicked = this.handleContactClicked.bind(this);
  }
  // Handle clicked links
  handleHomeClicked() {
    this.setState(
      {
        menuNumber: 0
      }
    );
  }
  handleAboutClicked() {
    this.setState(
      {
        menuNumber: 1
      }
    );
  }
  handleProjectsClicked() {
    this.setState(
      {
        menuNumber: 2
      }
    );
  }
  handleContactClicked() {
    this.setState(
      {
        menuNumber: 3
      }
    );
  }
  render() {
    return (
      <div>
        <nav>
          <div className="navbarContainer">
            <div onClick={this.handleHomeClicked}>
              <Link to={{ pathname: "/" }}> <img src={logo} alt="app logo" className="logo"/> </Link>
            </div>
            <div className="navLinkContainer" onClick={this.handleAboutClicked}>
              <Link to={{ pathname: "/about" }} className={(this.state.menuNumber === 1) ? "navLink textEnlighted" : "navLink"}> About </Link>
            </div>
            <div className="navLinkContainer" onClick={this.handleProjectsClicked}>
              <Link to={{ pathname: "/projects" }} className={(this.state.menuNumber === 2) ? "navLink textEnlighted" : "navLink"} id="projectsLink"> Projects </Link>
            </div>
            <div className="navLinkContainer" onClick={this.handleContactClicked}>
              <Link to={{ pathname: "/contact" }} className={(this.state.menuNumber === 3) ? "navLink textEnlighted" : "navLink"}> Contact </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;