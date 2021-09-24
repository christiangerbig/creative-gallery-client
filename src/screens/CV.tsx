import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsCVtoPDF } from "../reducer/creativeGallerySlice";
import SkillItem, { Skill } from "../components/SkillItem";
import TrainingDetails from "../components/TrainingDetails";
import CVProjectDetails from "../components/CVProjectDetails";
import portrait from "../images/portrait-mono.png";
import PageTitle from "../components/PageTitle";

export interface CVProjectItem {
  projectTitle: string;
  gitHubClientPathname: string;
  gitHubServerPathname: string;
  deployedPathname: string;
  projectDescription: string;
}

interface TrainingItem {
  trainingTitle: string;
  trainingPeriod: string;
  trainingContent: string;
}

const CV = () => {
  const dispatch = useDispatch();

  // Skills
  const skills: string[] = [
    "JavaScript (ES6) / TypeScript",
    "HTML5 / CSS3 / SASS",
    "jQuery",
    "React",
    "Redux",
    "MongoDB",
    "ExpressJs",
    "Handlebars",
    "NodeJs",
    "NPM",
    "Axios",
    "Bootstrap",
    "Git / GitHub",
  ];

  // Trainings
  const trainings: TrainingItem[] = [
    {
      trainingTitle: "Using TypeScript with React - Udemy",
      trainingPeriod: "08/2021 - 09/2021",
      trainingContent: "TypeScript | React | Redux | NextJS | GraphQL API",
    },
    {
      trainingTitle:
        "The essential React course incl. Hooks, Redux, React-Router - Udemy",
      trainingPeriod: "08/2021",
      trainingContent:
        "React | Hooks | Redux Toolkit | asynchronous Axios API calls",
    },
    {
      trainingTitle: "Full-Stack Web Developer - Ironhack boot camp",
      trainingPeriod: "01/2021 - 03/2021",
      trainingContent:
        "HTML5 | CSS3 | JavaScript (ES6) | React | ExpressJS | NodeJS | MongoDB | Axios",
    },
    {
      trainingTitle: "The complete Web Developer Masterclass - Udemy",
      trainingPeriod: "10/2020 - 11/2020",
      trainingContent:
        "HTML | CSS | SCSS | Javascript | jQuery | Bootstrap | PHP",
    },
    {
      trainingTitle: "Multimedia and visual presentations",
      trainingPeriod: "2015 - 2019",
      trainingContent: "68k assembler - realtime 3D matrix objects",
    },
  ];

  // Projects
  const projects: CVProjectItem[] = [
    {
      projectTitle: "CreativeGallery",
      gitHubClientPathname:
        "https://github.com/christiangerbig/creative-gallery-client",
      gitHubServerPathname:
        "https://github.com/christiangerbig/creative-gallery-server",
      deployedPathname: "https://creativegallery.herokuapp.com/",
      projectDescription:
        "Fullstack project using React | JavaScript | SASS | NodeJs | MongoDB | Axios",
    },
    {
      projectTitle: "JungleSwap",
      gitHubClientPathname:
        "https://github.com/christiangerbig/jungle-swap-client",
      gitHubServerPathname:
        "https://github.com/christiangerbig/jungle-swap-server",
      deployedPathname: "https://jungleswap.herokuapp.com/",
      projectDescription:
        "Fullstack project using React | JavaScript | SASS | Bootstrap | NodeJs MongoDB | Axios and APIs (Cloudinary | Stripe | Kommunicate Chatbot)",
    },
    {
      projectTitle: "Trackertools",
      gitHubClientPathname: "https://github.com/christiangerbig/Trackertools",
      gitHubServerPathname: "",
      deployedPathname: "https://trackertools.herokuapp.com/",
      projectDescription:
        "Fullstack project using Express | Handlebars | JavaScript | SASS | Bootstrap | MongoDB",
    },
    {
      projectTitle: "LetterShooter",
      gitHubClientPathname: "https://github.com/christiangerbig/letter-shooter",
      gitHubServerPathname: "",
      deployedPathname: "https://christiangerbig.github.io/letter-shooter/",
      projectDescription:
        "Frontend project with HTML5 | Canvas | JavaScript | CSS3",
    },
  ];

  useEffect(() => {
    dispatch(setIsCVtoPDF(true));
    return () => {
      dispatch(setIsCVtoPDF(false));
    };
  }, []);

  return (
    <div className="cvPageContainer">
      <PageTitle title="My CV" />
      <div id="content">
        <div className="cvContainer">
          <div className="cvDetailsContainer">
            <div className="cvPictureContainer">
              <img src={portrait} alt="potrait" />
            </div>
            <div>
              <h1> Christian Gerbig </h1>
            </div>
            <div>
              <h2> Frontend Developer </h2>
            </div>
            <div>
              <p>
                Javascript(ES6) | TypeScript | HTML5 | CSS3 | Bootstrap | React
                | Redux | MongoDB | NodeJS | Express | Axios
              </p>
              <p>
                Flotowstraße 21 <br />
                22083 Hamburg <br />
                Germany
              </p>
              <p>
                <span className="contactLink">
                  <Link to={{ pathname: "tel:+4915154824288" }} target="_blank">
                    +49 151 548 242 88
                  </Link>
                </span>
                <br />
                <span className="contactLink">
                  <Link
                    to={{ pathname: "mailto:chr_gerbig@web.de" }}
                    target="_blank"
                  >
                    chr_gerbig web.de
                  </Link>
                </span>
              </p>
              <div>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/christian-gerbig/",
                  }}
                  target="_blank"
                >
                  linkedin.com/in/christian-gerbig/
                </Link>
              </div>
              <div>
                <Link
                  to={{ pathname: "https://github.com/christiangerbig/" }}
                  target="_blank"
                >
                  github.com/christiangerbig
                </Link>
              </div>
              <div>
                <h3> MY GOAL </h3>
                <hr />
                <p>
                  Learning things, improving (them) and become part of a team
                  where I can apply, develop and share my skills.
                </p>
              </div>
              <div>
                <h3> SKILLS </h3>
                <hr />
                <ul>
                  {skills.map((skill: Skill, index: number) => {
                    return <SkillItem skill={skill} key={index} />;
                  })}
                </ul>
              </div>
              <div>
                <h3> LANGUAGES </h3>
                <hr />
                <ul>
                  <li> German: native </li>
                  <li> English: fluent </li>
                </ul>
              </div>
              <div>
                <h3> PERSONAL ACTIVITIES </h3>
                <hr />
                <ul>
                  <li> Music and composing </li>
                  <li> Contemporary History </li>
                  <li> Retro computer productions </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cvCareerContainer">
            <div>
              <h3> FURTHER TRAINING </h3>
              <hr />
            </div>
            {trainings.map((trainingItem: TrainingItem, index) => {
              return (
                <TrainingDetails trainingItem={trainingItem} key={index} />
              );
            })}
            <div>
              <h3> PROJECTS </h3>
              <hr />
            </div>
            <div>
              {projects.map((cvProjectItem: CVProjectItem, index: number) => {
                return (
                  <CVProjectDetails cvProjectItem={cvProjectItem} key={index} />
                );
              })}
            </div>
            <div>
              <h3> WORK EXPERIENCE </h3>
              <hr />
            </div>
            <div className="cvWorkDetailsContainer">
              <h4> Accounting Clerk - Deutsche Extrakt Kaffee GmbH Hamburg </h4>
              <h6> 05/2019 - 10/2019 </h6>
              <ul>
                <li> Account assignment </li>
                <li> Master data maintenance </li>
                <li> Reconciliation of subledger accounts </li>
              </ul>
            </div>
            <div className="cvWorkDetailsContainer">
              <h4> Accounting Clerk - Fieldfisher Hamburg </h4>
              <h6> 02/2017 - 01/2019 </h6>
            </div>
            <div>
              <h3> EDUCATION </h3>
              <hr />
            </div>
            <div className="cvEducationDetailsContainer">
              <h4>
                Qualified Social Education Worker - Fachhochschule Darmstadt
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
