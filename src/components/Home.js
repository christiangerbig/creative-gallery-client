import React from "react";
import {Link} from "react-router-dom";

const Home = ({onNavLinkClicked}) => {
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
      <div className="myText">
        <Link to={{pathname: "/about"}} className="homeLink" onClick={() => onNavLinkClicked(1)}> <h4> my </h4> </Link>
      </div>
      <div className="creativeText">
        <Link to={{pathname: "/projects"}} className="homeLink" onClick={() => onNavLinkClicked(2)}> <h2> creative </h2> </Link>
      </div>
      <div className="galleryText">
        <Link to={{pathname: "/projects"}} className="homeLink" onClick={() => onNavLinkClicked(2)}> <h2> gallery </h2> </Link>
      </div>
    </div>
  );
}

export default Home;