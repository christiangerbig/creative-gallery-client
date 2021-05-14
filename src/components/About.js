import React, { Component } from "react";
import portrait from "../images/portrait-mono.png";

class About extends Component {
  render() {
    return (
      <>
      <div className="aboutPageContainer">
        <div className="pageNameContainer">
          <h2> About me </h2>
        </div>
        <div className="aboutDetailsContainer">
          <div className="aboutDetailsText">
            <h3> Hi, </h3>
            <p> I"m <b> Christian</b>. </p>
            <p> I"m a <b> Web Developer </b> and my homebase is in Germany is <b> Hamburg</b>. </p>
            <p> My motto: <b> I want to learn things and improve them</b>. </p>
            <p> I believe in the <b> positive power </b> of working together <b> in a team </b> with different point of views. </p>
            <p> I love individual solutions to meet the target. </p>
          </div>
          <div className="aboutPicture">
            <img src={portrait} alt="potrait"/>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default About;