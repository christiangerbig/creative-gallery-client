import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div className="homePageContainer backgroundImage">
          <div className="pageNameContainer">
            <h2> Home </h2>
          </div>
          <div className="welcomeText">
            <h1> WELCOME </h1>
          </div>
          <div className="toMyText">
            <h4> to my </h4>
          </div>
          <div className="creativeText">
            <h2> creative </h2>
          </div>
          <div className="galleryText">
            <h2> gallery </h2>
          </div>
        </div>
      </>
    );
  }
}

export default Home;