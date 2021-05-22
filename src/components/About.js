import React from "react";
import { Link } from "react-router-dom";
import portrait from "../images/portrait-mono.png";

function About(props) {
    return (
      <div className="aboutPageContainer">
        <div className="pageNameContainer">
          <h2> About me </h2>
        </div>
        <div className="aboutDetailsContainer">
          <div className="aboutDetailsText">
            <h3> Hello, </h3>
            <p> I'm <b> Christian. </b> </p>
            <p>
              A <b> passionate and dedicated Web Developer </b>
              using every aspect of the New Technology available to reach the goals.
              Actually living in <b> Hamburg </b> in Germany.
            </p>
            <p>
              I believe in a <b> positive power </b> of communication, trust and <b> cooperative team working </b>
              making an asset from <b> sharing different points of views </b>.
            </p>
            <p>
              I love to code <b> optimized solutions suiting individual requirements </b> with respect to time, 
              budget and target.
            </p>
            <p>
              My motto: <b> "Learning things, improving (them) and reach the goals" </b>.
            </p>
            <p>
              My goal is to <b> become part of a great team </b> where I can <b> apply and develop my skills</b>.
            </p>
            <p>
              Thank you for reading, your trust and hope <span className="aboutContactLink" onClick={props.onContactClicked}> <Link to={{ pathname: "/contact" }}> hearing from you </Link> </span>.
            </p>
            <div className="aboutLinksContainer">
              <div>
                <Link to={{ pathname: "/cv" }} className="aboutMyCVLink"> CV </Link>
              </div>
              <div>
                <Link to={{ pathname: "https://www.linkedin.com/in/christian-gerbig/" }} target="_blank" className="aboutLinkedInLink">  LinkedIn </Link>
              </div>
              <div>
                <Link to={{ pathname: "https://github.com/christiangerbig/" }} target="_blank" className="aboutGitHubLink">  GitHub </Link>
              </div>
            </div>
          </div>
          <div className="aboutPictureContainer">
            <img src={portrait} alt="potrait"/>
          </div>
        </div>
      </div>
    );
  }


export default About;