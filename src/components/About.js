import React, { Component } from "react";
import { Link } from "react-router-dom";
import portrait from "../images/portrait-mono.png";

class About extends Component {
  render() {
    return (
      <div className="aboutPageContainer">
        <div className="pageNameContainer">
          <h2> About me </h2>
        </div>
        <div className="aboutDetailsContainer">
          <div className="aboutDetailsText">
            <h3> Hi, </h3>
            <p> I'm <b> Christian</b>. </p>
            <p> I'm a <b> Web Developer </b> and my homebase in Germany is <b> Hamburg</b>. </p>
            <p> My motto: <b> I want to learn things and improve them</b>. </p>
            <p> I believe in the <b> positive power </b> of working together <b> in a team </b> with different points of views. </p>
            <p> I love to code <b> individual solutions </b> to meet the target. </p>
            <div className="aboutLinksContainer">
              <div>
                <Link to={{ pathname: "https://github.com/christiangerbig/" }} target="_blank" className="aboutGitHubLink">  GitHub </Link>
              </div>
              <div>
                <Link to={{ pathname: "https://www.linkedin.com/in/christian-gerbig/" }} target="_blank" className="aboutLinkedInLink">  LinkedIn </Link>
              </div>
              <div>
                <Link to={{ pathname: "https://docs.google.com/document/d/e/2PACX-1vTV5IRdlsCKdyj5JFSbGROVLEe26CLi4BJMOYjLMmSWBioLgvWCJKDswBPwgUF7UJT85ImdFR36RF8H/pub" }} target="_blank" className="aboutMyCVLink">  CV </Link>
              </div>
            </div>
            
          </div>
          <div className="aboutPicture">
            <img src={portrait} alt="potrait"/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;