import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import ProjectDetails from "../components/ProjectDetails";
import jungleSwap from "../images/jungle-swap.png";
import trackerTools from "../images/trackertools.png";
import letterShooter from "../images/letter-shooter.png";
import {
  jungleSwapDeployedPath,
  jungleSwapGitHubClientPath,
  jungleSwapGitHubServerPath,
  jungleSwapVideoPath,
  letterShooterDeployedPath,
  letterShooterGitHubClientPath,
  letterShooterVideoPath,
  trackerToolsDeployedPath,
  trackerToolsGitHubClientPath,
  trackerToolsVideoPath,
} from "../lib/externalLinkPaths";

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
      projectVideoPath: jungleSwapVideoPath,
      projectDescription: ` Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. <br /> <br /> <br />`,
      deployedPath: jungleSwapDeployedPath,
      gitHubClientPath: jungleSwapGitHubClientPath,
      gitHubServerPath: jungleSwapGitHubServerPath,
    },
    {
      projectName: "TRACKERTOOLS",
      projectPicturePath: trackerTools,
      projectVideoPath: trackerToolsVideoPath,
      projectDescription: `Four powerful tools to make working with the music editor Protracker and its modules more comfortable. <br /> <br /> <br />`,
      deployedPath: trackerToolsDeployedPath,
      gitHubClientPath: trackerToolsGitHubClientPath,
      gitHubServerPath: "",
    },
    {
      projectName: "LETTER SHOOTER",
      projectPicturePath: letterShooter,
      projectVideoPath: letterShooterVideoPath,
      projectDescription: ` A coordination and strategy game with the goal to hit the missing letters with precise shots. <br /> <br /> <br />`,
      deployedPath: letterShooterDeployedPath,
      gitHubClientPath: letterShooterGitHubClientPath,
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
