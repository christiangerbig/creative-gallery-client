import React, { Component } from "react";
import { Link } from "react-router-dom";
import portrait from "../images/portrait-mono.png";

class CV extends Component {
  render() {
    return (
      <div className="cvPageContainer">
        <div className="pageNameContainer">
          <h2> My CV </h2>
        </div>
        <div className="cvContainer">
          <div className="cvDetailsContainer">
            <div className="cvPictureContainer">
              <img src={portrait} alt="potrait"/>
            </div>
            <div>
              <h1> Christian Gerbig </h1>
            </div>
            <div>
              <h2> Frontend Developer </h2>
            </div>
            <div>
              <p> Javascript (ES6) | HTML5 | CSS3 | Bootstrap React | MongoDB | NodeJS | Express | Axios </p>
              <p>
                Flotowstraße 21 <br/>
                22083 Hamburg <br/>
                Germany
              </p>
              <p>
                <span className="contactLink"> <Link to={{ pathname: "tel:+4915154824288" }} target="_blank"> +49 151 548 242 88 </Link> </span> <br/>
                <span className="contactLink"> <Link to={{ pathname: "mailto:chr_gerbig@web.de" }} target="_blank"> chr_gerbig web.de </Link> </span>
              </p>
              <div>
                <Link to={{ pathname: "https://www.linkedin.com/in/christian-gerbig/" }} target="_blank">  linkedin.com/in/christian-gerbig/ </Link>
              </div>
              <div>
                <Link to={{ pathname: "https://github.com/christiangerbig/" }} target="_blank">  github.com/christiangerbig </Link>
              </div>
              <div>
                <h3> ABOUT ME </h3>
                <hr/>
                <p>
                  I am a passionate and dedicated Web Developer using every aspect of the New Technology available to reach the goals. 
                  I believe in a positive power of communication, trust in cooperative team working making an asset from sharing different 
                  points of views. 
                  I love to code optimized solutions suiting individual requirements with respect to time, budget and target. 
                  My motto: "Learning things, improving (them) and reach the goals". 
                  My goal is to become part of a team where I can apply, develop and share my skills.
                </p>
              </div>
              <div>
                <h3> SKILLS </h3>
                <hr/>
                <ul>
                  <li> JavaScript (ES6) </li>
                  <li> HTML5 / CSS3 </li>
                  <li> React </li>
                  <li> MongoDB </li>
                  <li> ExpressJs </li>
                  <li> Handlebars </li>
                  <li> NodeJs </li>
                  <li> Axios </li>
                  <li> Bootstrap </li>
                  <li> GitHub </li>
                </ul>
              </div>
              <div>
                <h3> LANGUAGES </h3>
                <hr/>
                <ul>
                  <li> German: native </li>
                  <li> English: fluent </li>
                </ul>
              </div>
              <div>
                <h3> PERSONAL ACTIVITIES </h3>
                <hr/>
                <ul>
                  <li> Music and composing </li>
                  <li> Books about Contemporary History </li>
                  <li> Arthouse movies and museums </li>
                  <li> Learning languages </li>
                  <li> Retro computer productions </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cvProjectsContainer">
            <div>
              <h3> PROJECTS </h3>
              <hr/>
            </div>
            <div>
              <div className="cvProjectDetailContainer">
                <div className="cvProjectContainer">
                  <h4> CreativeGallery </h4>
                  <div>
                    <Link to={{ pathname: "https://github.com/christiangerbig/creative-gallery-client" }} target="_blank" className="cvProjectLink"> GitHubClient </Link>
                  </div>
                  <div>
                    <Link to={{ pathname: "https://github.com/christiangerbig/creative-gallery-server" }} target="_blank" className="cvProjectLink"> GitHubServer </Link>
                  </div>
                  <div>
                    <Link to={{ pathname: "https://creativegallery.herokuapp.com/" }} target="_blank" className="cvProjectLink"> Deployment </Link>
                  </div>
                </div>
                <p> Single page vanilla CSS application using React | JavaScript | CSS3 | NodeJs | MongoDB | Axios </p>
                <p> This is my portfolio to present my projects and another exercise to apply my React/JavaScript knowledge. </p>
              </div>
              <div className="cvProjectDetailContainer">
                <div className="cvProjectContainer">
                  <h4> JungleSwap </h4>
                  <div>
                    <Link to={{ pathname: "https://github.com/christiangerbig/jungle-swap-client" }} target="_blank" className="cvProjectLink"> GitHubClient </Link>
                  </div>
                  <div>
                    <Link to={{ pathname: "https://github.com/christiangerbig/jungle-swap-server" }} target="_blank" className="cvProjectLink"> GitHubServer </Link>
                  </div>
                  <div>
                    <Link to={{ pathname: "https://jungleswap.herokuapp.com/" }} target="_blank" className="cvProjectLink"> Deployment </Link>
                  </div>
                </div>
                <p> Single page application using React | JavaScript | CSS3 | Bootstrap | NodeJs MongoDB |  Axios and APIs (Cloudinary | Stripe | Kommunicate Chatbot) </p>
                <p> With this app you can share your plant offshoots, sell, buy or swap them for another plant. Shop and give a plant a new home. </p>
              </div>
              <div className="cvProjectDetailContainer">
                <div className="cvProjectContainer">
                  <h4> Trackertools </h4>
                  <div>
                    <Link to={{ pathname: "https://github.com/christiangerbig/Trackertools" }} target="_blank" className="cvProjectLink"> GitHub </Link>
                  </div>
                  <div>
                    <Link to={{ pathname: "https://trackertools.herokuapp.com/" }} target="_blank" className="cvProjectLink"> Deployment </Link>
                  </div>
                </div>
                <p> Full stack project using Express | Handlebars | JavaScript | CSS3 | Bootstrap | MongoDB </p>
                <p> This app includes four powerful tools to make working with the music editor Protracker and its modules more comfortable. </p>
              </div>
              <div className="cvProjectDetailContainer">
                <div className="cvProjectContainer">
                  <h4> LetterShooter </h4>
                  <div>
                    <Link to={{ pathname: "https://github.com/christiangerbig/letter-shooter" }} target="_blank" className="cvProjectLink"> GitHub </Link>
                  </div>
                  <div>
                    <Link to={{ pathname: "https://christiangerbig.github.io/letter-shooter/" }} target="_blank"  className="cvProjectLink"> Deployment </Link>
                  </div>
                </div>
                <p> Front-end project build with HTML5 | Canvas | JavaScript | CSS3 </p>
                <p> A coordination and strategy game with the goal to hit the missing letters with precise shots. </p>
              </div>
            </div>
            <div>
              <h3> EDUCATION </h3>
              <hr/>
            </div>
            <div className="cvEducationDetailsContainer">
              <h4> Ironhack - Full-Stack Web Developer boot camp </h4>
              <h5> 01/2021 - 03/2021 </h5>
              <ul>
                <li> Front end technologies learned: HTML5 | CSS3 | JavaScript (ES6) | React </li>
                <li> Back end technologies learned: ExpressJS | NodeJS | MongoDB | Axios </li>
              </ul>
            </div>
            <div className="cvEducationDetailsContainer">
              <h4> Udemy - The complete Web Developer Masterclass </h4>
              <h5> 10/2020 - 11/2020 </h5>
              <ul>
                <li> HTML | CSS | SCSS | Javascript | jQuery | Bootstrap | PHP </li>
              </ul>
            </div>
            <div className="cvEducationDetailsContainer">
              <h4> Multimedia and visual presentations </h4>
              <h5> 2015 - 2019 </h5>
              <ul>
                <li> 68k assembler - realtime 3D matrix objects </li>
              </ul>
            </div>
            <div className="cvEducationDetailsContainer">
              <h4> Fachhochschule Darmstadt </h4>
              <h5> 10/1993 - 02/1999 </h5>
              <ul>
                <li> Qualified Social Education Worker </li>
              </ul>
            </div>
            <div>
              <h3> WORK EXPERIENCE </h3>
              <hr/>
            </div>
            <div className="cvWorkDetailsContainer">
              <h4> Deutsche Extrakt Kaffee GmbH Hamburg </h4>
              <h5> 05/2019 - 10/2019 </h5>
              <ul>
                <li> Accounting Clerk </li>
                <h5> Account assignment </h5>
                <h5> Master data maintenance </h5>
                <h5> Reconciliation of subledger accounts </h5>
              </ul>
              
            </div>
            <div className="cvWorkDetailsContainer">
              <h4> Fieldfisher Hamburg </h4>
              <h5> 02/2017 - 01/2019 </h5>
              <ul>
                <li> Accounting Clerk </li>
              </ul>
            </div>
            <div className="cvWorkDetailsContainer">
              <h4> EDEKA Versorgungsgesellschaft mbH Hamburg </h4>
              <h5> 10/2012 - 01/2017 </h5>
              <ul>
                <li> Accounting Clerk </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;