import React from "react";
import {Link} from "react-router-dom";
import jungleSwap from "../images/jungle-swap.png";
import trackertools from "../images/trackertools.png";
import letterShooter from "../images/letter-shooter.png";

const Projects = () => {
  return (
    <div className="projectsPageContainer">
      <div className="pageNameContainer">
        <h2> My projects </h2>
      </div>
      <div className="projectsIntroTextContainer">
        <h3 className="projectsIntroText"> Here below you can see some of my projects I was working recently on </h3>
      </div>
      <div className="projectsContainer">
        <div className="projectDetailsContainer">
          <div>
            <video width="360" height="200" autoplay muted controls poster={jungleSwap} src="https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4"/>
          </div>
          <div>
            <h3> JungleSwap </h3>
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
              <Link to={{pathname: "https://jungleswap.herokuapp.com/"}} target="_blank" className="projectTryItLink"> Try it out </Link>
            </div>
            <div>
              <Link to={{pathname: "https://github.com/christiangerbig/jungle-swap-client"}} target="_blank" className="projectGitHubLink"> GitHub Client </Link>
            </div>
            <div>
              <Link to={{pathname: "https://github.com/christiangerbig/jungle-swap-server"}} target="_blank" className="projectGitHubLink"> GitHub Server </Link>
            </div>
          </div>
        </div>
        <div className="projectDetailsContainer">
          <div>
            <video width="360" height="200" autoplay muted controls poster={trackertools} src="https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4"/>         
          </div>
          <div>
            <h3> Trackertools </h3>
            <h4>
              Express | Handlebars | JavaScript | CSS3 <br/> 
              Bootstrap | MongoDB | Responsive
            </h4>
            <p> 
              Four powerful tools to make working <br/>
              with the music editor Protracker and <br/>
              its modules more comfortable. <br/>
              <br/>
            </p>
          </div>
          <div className="projectLinksContainer">
            <div>
              <Link to={{pathname: "https://trackertools.herokuapp.com/"}} target="_blank" className="projectTryItLink"> Try it out </Link>
            </div>
            <div>
              <Link to={{pathname: "https://github.com/christiangerbig/Trackertools"}} target="_blank" className="projectGitHubLink"> GitHub </Link>
            </div>
          </div>
        </div>
        <div className="projectDetailsContainer">
          <div>
            <video width="360" height="200" autoplay muted controls poster={letterShooter} src="https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4"/>
          </div>
          <div>
            <h3> Letter Shooter </h3>
            <h4> 
                JavaScript | HTML5 | Canvas | CSS3 
            </h4>
            <p> 
              A coordination and strategy game <br/> 
              with the goal to hit the missing <br/> 
              letters with precise shots. <br/>
              <br/>
              <br/>
            </p>
          </div>
          <div className="projectLinksContainer">
            <div>
              <Link to={{pathname: "https://christiangerbig.github.io/letter-shooter/"}} target="_blank" className="projectTryItLink"> Try it out </Link>
            </div>
            <div>
              <Link to={{pathname: "https://github.com/christiangerbig/letter-shooter"}} target="_blank" className="projectGitHubLink"> GitHub </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;