import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="homePageContainer logoImage">
        <div className="pageNameContainer">
          <h2> Intro </h2>
        </div>
        <div className="welcomeText">
            <h1> WELCOME </h1>
        </div>
        <div className="toText">
          <h4> to </h4>
        </div>
        <div className="myText" onClick={ this.props.onAboutClicked }>
          <Link to={{ pathname: "/about" }} className="homeLink"> <h4> my </h4> </Link>
        </div>
        <div className="creativeText" onClick={ this.props.onProjectsClicked }>
          <Link to={{ pathname: "/projects" }} className="homeLink"> <h2> creative </h2> </Link>
        </div>
        <div className="galleryText" onClick={ this.props.onProjectsClicked }>
          <Link to={{ pathname: "/projects" }} className="homeLink"> <h2> gallery </h2> </Link>
        </div>
      </div>
    );
  }
}

export default Home;