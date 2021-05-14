import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="footerContainer">
            <div>
              <p> © 2021 by Christian Gerbig </p>
            </div>
            <div className="footerLinkContainer">
              <Link to={{ pathname: "https://github.com/christiangerbig/" }} target="_blank" className="footerGitHubLink">  GitHub </Link>
            </div>
            <div className="footerLinkContainer">
              <Link to={{ pathname: "https://www.linkedin.com/in/christian-gerbig/" }} target="_blank" className="footerLinkedInLink">  LinkedIn </Link>
            </div>
            <div className="footerLinkContainer">
              <Link to={{ pathname: "https://docs.google.com/document/d/e/2PACX-1vTV5IRdlsCKdyj5JFSbGROVLEe26CLi4BJMOYjLMmSWBioLgvWCJKDswBPwgUF7UJT85ImdFR36RF8H/pub" }} target="_blank" className="footerMyCVLink">  myCV </Link>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;