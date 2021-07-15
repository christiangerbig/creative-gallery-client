import React from "react";
import {Link} from "react-router-dom";

const Home = ({onAboutClicked, onProjectsClicked}) => {
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
      <div className="myText" onClick={onAboutClicked}>
        <Link to={{pathname: "/about"}} className="homeLink"> <h4> my </h4> </Link>
      </div>
      <div className="creativeText" onClick={onProjectsClicked}>
        <Link to={{pathname: "/projects"}} className="homeLink"> <h2> creative </h2> </Link>
      </div>
      <div className="galleryText" onClick={onProjectsClicked}>
        <Link to={{pathname: "/projects"}} className="homeLink"> <h2> gallery </h2> </Link>
      </div>
    </div>
  );
}

export default Home;