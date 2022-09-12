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

const projects: ProjectItem[] = [
  {
    projectName: "JUNGLE SWAP",
    projectPicturePath: jungleSwapImage,
    projectVideoPath: jungleSwapVideoPath,
    projectDescription: "Share your plant offshoots and make money or swap them for another plant. Shop and give a plant a new home.",
    deployedPath: jungleSwapDeployedPath,
    gitHubClientPath: jungleSwapGitHubClientPath,
    gitHubServerPath: jungleSwapGitHubServerPath,
  },
  {
    projectName: "TRACKERTOOLS",
    projectPicturePath: trackerToolsImage,
    projectVideoPath: trackerToolsVideoPath,
    projectDescription: "Four powerful tools to make working with the music editor Protracker and its modules more comfortable.",
    deployedPath: trackerToolsDeployedPath,
    gitHubClientPath: trackerToolsGitHubClientPath,
    gitHubServerPath: "",
  },
  {
    projectName: "LETTER SHOOTER",
    projectPicturePath: letterShooterImage,
    projectVideoPath: letterShooterVideoPath,
    projectDescription: "A coordination and strategy game with the goal to hit the missing letters with precise shots.",
    deployedPath: letterShooterDeployedPath,
    gitHubClientPath: letterShooterGitHubClientPath,
    gitHubServerPath: "",
  },
];

export default projects;
