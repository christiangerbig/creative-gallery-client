import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import ProjectDetails from "../components/ProjectDetails";
import jungleSwap from "../images/jungle-swap.png";
import trackertools from "../images/trackertools.png";
import letterShooter from "../images/letter-shooter.png";

export interface ProjectItem {
  projectName: string;
  projectPicturePath: string;
  projectVideoPath: string;
  projectDescription: string;
  deployedPath: string;
  gitHubClientPath: string;
  gitHubServerPath: string;
}

const Projects = (): JSX.Element => {
  // Projects
  const projects: ProjectItem[] = [
    {
      projectName: "JUNGLE SWAP",
      projectPicturePath: jungleSwap,
      projectVideoPath:
        "https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-45-637566759460450173.mp4",
      projectDescription: ` Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. <br /> <br /> <br />`,
      deployedPath: "https://jungleswap.herokuapp.com/",
      gitHubClientPath: "https://github.com/christiangerbig/jungle-swap-client",
      gitHubServerPath: "https://github.com/christiangerbig/jungle-swap-server",
    },
    {
      projectName: "TRACKERTOOLS",
      projectPicturePath: trackertools,
      projectVideoPath:
        "https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-13-35-637566753722531829.mp4",
      projectDescription: `Four powerful tools to make working with the music editor Protracker and its modules more comfortable. <br /> <br /> <br />`,
      deployedPath: "https://trackertools.herokuapp.com/",
      gitHubClientPath: "https://github.com/christiangerbig/Trackertools",
      gitHubServerPath: "",
    },
    {
      projectName: "LETTER SHOOTER",
      projectPicturePath: letterShooter,
      projectVideoPath:
        "https://bliskcloudstorage.blob.core.windows.net/videos/2c9bdc9d-6b6f-4823-844c-2a2cd5c36a86/15-May-2021-14-10-637566774755686276.mp4",
      projectDescription: ` A coordination and strategy game with the goal to hit the missing letters with precise shots. <br /> <br /> <br />`,
      deployedPath: "https://christiangerbig.github.io/letter-shooter/",
      gitHubClientPath: "https://github.com/christiangerbig/letter-shooter",
      gitHubServerPath: "",
    },
  ];

  // Scroll to top as soon as page loads
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="projectsPageContainer">
      <header>
        <div className="headerText orangeBorder">
          <h1 className="textFat"> My Web Developer projects </h1>
          <h2 className="textBig"> I was working on </h2>
        </div>
      </header>
      <div className="projectsContainer">
        {projects.map(
          (projectItem: ProjectItem, index: number): JSX.Element => {
            return <ProjectDetails projectItem={projectItem} key={index} />;
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
