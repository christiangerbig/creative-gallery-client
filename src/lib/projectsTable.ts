import jungleSwapImage from "../images/jungle-swap.png";
import trackerToolsImage from "../images/trackertools.png";
import letterShooterImage from "../images/letter-shooter.png";
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

// Projects
export interface ProjectItem {
  projectName: string;
  projectPicturePath: string;
  projectVideoPath: string;
  projectDescription: string;
  deployedPath: string;
  gitHubClientPath: string;
  gitHubServerPath: string;
}

export const projectsTable: ProjectItem[] = [
  {
    projectName: "JUNGLE SWAP",
    projectPicturePath: jungleSwapImage,
    projectVideoPath: jungleSwapVideoPath,
    projectDescription: ` Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. <br /> <br /> <br />`,
    deployedPath: jungleSwapDeployedPath,
    gitHubClientPath: jungleSwapGitHubClientPath,
    gitHubServerPath: jungleSwapGitHubServerPath,
  },
  {
    projectName: "TRACKERTOOLS",
    projectPicturePath: trackerToolsImage,
    projectVideoPath: trackerToolsVideoPath,
    projectDescription: `Four powerful tools to make working with the music editor Protracker and its modules more comfortable. <br /> <br /> <br />`,
    deployedPath: trackerToolsDeployedPath,
    gitHubClientPath: trackerToolsGitHubClientPath,
    gitHubServerPath: "",
  },
  {
    projectName: "LETTER SHOOTER",
    projectPicturePath: letterShooterImage,
    projectVideoPath: letterShooterVideoPath,
    projectDescription: ` A coordination and strategy game with the goal to hit the missing letters with precise shots. <br /> <br /> <br />`,
    deployedPath: letterShooterDeployedPath,
    gitHubClientPath: letterShooterGitHubClientPath,
    gitHubServerPath: "",
  },
];