import React from "react";
import ProjectDetails from "../components/ProjectDetails";
import jungleSwap from "../images/jungle-swap.png";
import trackertools from "../images/trackertools.png";
import letterShooter from "../images/letter-shooter.png";

const Projects = () => {
  const projects = [
    {
      projectName: "JungleSwap",
      projectPicturePath: jungleSwap,
      projectVideoPath:
        "https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",
      projectStack: `React | JavaScript | SASS | Bootstrap <br /> NodeJs | MongoDB | Axios | Responsive`,
      projectDescription: ` Share your plant offshoots. <br /> Make money or swap them for another plant. <br /> Shop and give a plant a new home. <br /> <br />`,
      deployedPath: "https://jungleswap.herokuapp.com/",
      gitHubClientPath: "https://github.com/christiangerbig/jungle-swap-client",
      gitHubServerPath: "https://github.com/christiangerbig/jungle-swap-server",
    },
    {
      projectName: "Trackertools",
      projectPicturePath: trackertools,
      projectVideoPath:
        "https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",
      projectStack: `Express | Handlebars | JavaScript | SASS <br /> Bootstrap | MongoDB | Responsive`,
      projectDescription: `Four powerful tools to make working <br /> with the music editor Protracker and <br /> its modules more comfortable. <br /> <br />`,
      deployedPath: "https://trackertools.herokuapp.com/",
      gitHubClientPath: "https://github.com/christiangerbig/Trackertools",
      gitHubServerPath: "",
    },
    {
      projectName: "Letter Shooter",
      projectPicturePath: letterShooter,
      projectVideoPath:
        "https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",
      projectStack: `JavaScript | HTML5 | Canvas | CSS3`,
      projectDescription: ` A coordination and strategy game <br /> with the goal to hit the missing <br /> letters with precise shots. <br /> <br /> <br />`,
      deployedPath: "https://christiangerbig.github.io/letter-shooter/",
      gitHubClientPath: "https://github.com/christiangerbig/letter-shooter",
      gitHubServerPath: "",
    },
  ];

  return (
    <div className="projectsPageContainer">
      <div className="pageNameContainer">
        <h2> My projects </h2>
      </div>
      <div className="projectsIntroTextContainer">
        <h3 className="projectsIntroText">
          Here below you can see some of my projects I was working recently on
        </h3>
      </div>
      <div className="projectsContainer">
        {projects.map(
          ({
            projectName,
            projectPicturePath,
            projectVideoPath,
            projectStack,
            projectDescription,
            deployedPath,
            gitHubClientPath,
            gitHubServerPath,
          }) => {
            return (
              <ProjectDetails
                projectName={projectName}
                projectPicturePath={projectPicturePath}
                projectVideoPath={projectVideoPath}
                projectStack={projectStack}
                projectDescription={projectDescription}
                deployedPath={deployedPath}
                gitHubClientPath={gitHubClientPath}
                gitHubServerPath={gitHubServerPath}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
