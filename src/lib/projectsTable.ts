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
import { ProjectItem } from "../typeDefinitions";

export const projectsTable: ProjectItem[] = [
  {
    projectName: "JUNGLE SWAP",
    projectPicturePath: jungleSwapImage,
    projectVideoPath: jungleSwapVideoPath,
    projectDescription: `<p> Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home. </p>`,
    deployedPath: jungleSwapDeployedPath,
    gitHubClientPath: jungleSwapGitHubClientPath,
    gitHubServerPath: jungleSwapGitHubServerPath,
  },
  {
    projectName: "TRACKERTOOLS",
    projectPicturePath: trackerToolsImage,
    projectVideoPath: trackerToolsVideoPath,
    projectDescription: `<p> Four powerful tools to make working with the music editor Protracker and its modules more comfortable. </p>`,
    deployedPath: trackerToolsDeployedPath,
    gitHubClientPath: trackerToolsGitHubClientPath,
    gitHubServerPath: "",
  },
  {
    projectName: "LETTER SHOOTER",
    projectPicturePath: letterShooterImage,
    projectVideoPath: letterShooterVideoPath,
    projectDescription: `<p> A coordination and strategy game with the goal to hit the missing letters with precise shots. </p>`,
    deployedPath: letterShooterDeployedPath,
    gitHubClientPath: letterShooterGitHubClientPath,
    gitHubServerPath: "",
  },
];
