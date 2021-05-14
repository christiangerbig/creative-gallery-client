import React, { Component } from "react";
import { Link } from "react-router-dom";
import letterShooter from "../images/letter-shooter.png";
import trackertools from "../images/trackertools.png";
import jungleSwap from "../images/jungle-swap.png";

class Projects extends Component {
  render() {
    return (
      <>
        <div className="projectsPageContainer">
          <div className="pageNameContainer">
            <h2> My projects </h2>
          </div>
          <div className="projectsContainer">
            <div className="projectDetailsContainer">
              <div>
                <img src={letterShooter} alt="app lettershooter screenshot"/>
              </div>
              <div>
                <h3> Project Letter Shooter </h3>
                <h4> 
                    JavaScript | HTML5 | Canvas | CSS3 
                </h4>
                <p> 
                  A coordination and strategy game <br/> 
                  with the goal to hit the missing <br/> 
                  letters with your precise shots. <br/>
                  <br/>
                  <br/>
                </p>
              </div>
              <div className="projectLinksContainer">
                <div>
                  <Link to={{ pathname: "https://christiangerbig.github.io/letter-shooter/" }} target="_blank" className="projectTryItLink"> Try it out </Link>
                </div>
                <div>
                  <Link to={{ pathname: "https://github.com/christiangerbig/letter-shooter" }} target="_blank" className="gitHubLink"> GitHub </Link>
                </div>
              </div>
            </div>
            <div className="projectDetailsContainer">
              <div>
                <img src={trackertools} alt="app trackertools screenshot"/>               
              </div>
              <div>
                <h3> Project Trackertools </h3>
                <h4>
                  Express | Handlebars | JavaScript | CSS3 <br/> 
                  Bootstrap | MongoDB | Responsive
                </h4>
                <p> 
                  This collection includes four powerful <br/>
                  tools to make the work with Protracker <br/>
                  modules more comfortable. <br/>
                  <br/>
                </p>
              </div>
              <div className="projectLinksContainer">
                <div>
                  <Link to={{ pathname: "https://trackertools.herokuapp.com/" }} target="_blank" className="projectTryItLink"> Try it out </Link>
                </div>
                <div>
                  <Link to={{ pathname: "https://github.com/christiangerbig/Trackertools" }} target="_blank" className="gitHubLink"> GitHub </Link>
                </div>
              </div>
            </div>
            <div className="projectDetailsContainer">
              <div>
                <img src={jungleSwap} alt="app jungleswap screenshot"/>
              </div>
              <div>
                <h3> Project JungleSwap </h3>
                <h4> 
                  React | JavaScript | CSS3 | Bootstrap <br/> 
                  NodeJs | MongoDB | Axios | Responsive
                </h4>
                <p>
                  Share your plant offshoots. <br/>
                  Make money or swap them for another plant. <br/>
                  Shop and give a plant a new home. <br/>
                  <br/>
                </p>
              </div>
              <div className="projectLinksContainer">
                <div>
                  <Link to={{ pathname: "https://jungle-swap.herokuapp.com/" }} target="_blank" className="projectTryItLink"> Try it out </Link>
                </div>
                <div>
                  <Link to={{ pathname: "https://github.com/christiangerbig/JUNGLE_SWAP-client" }} target="_blank" className="gitHubLink"> GitHub Client </Link>
                </div>
                <div>
                  <Link to={{ pathname: "https://github.com/christiangerbig/JUNGLE_SWAP-server" }} target="_blank" className="gitHubLink"> GitHub Server </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;