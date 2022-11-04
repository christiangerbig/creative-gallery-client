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
import { ProjectItem } from "../app/typeDefinitions";

const projects: ProjectItem[] = [
  {
    projectName: "texts.projects.jungleSwap.name",
    projectPicturePath: jungleSwapImage,
    projectVideoPath: jungleSwapVideoPath,
    projectDescription: "texts.projects.jungleSwap.description",
    deployedPath: jungleSwapDeployedPath,
    gitHubClientPath: jungleSwapGitHubClientPath,
    gitHubServerPath: jungleSwapGitHubServerPath,
  },
  {
    projectName: "texts.projects.trackerTools.name",
    projectPicturePath: trackerToolsImage,
    projectVideoPath: trackerToolsVideoPath,
    projectDescription: "texts.projects.trackerTools.description",
    deployedPath: trackerToolsDeployedPath,
    gitHubClientPath: trackerToolsGitHubClientPath,
    gitHubServerPath: "",
  },
  {
    projectName: "texts.projects.letterShooter.name",
    projectPicturePath: letterShooterImage,
    projectVideoPath: letterShooterVideoPath,
    projectDescription: "texts.projects.letterShooter.description",
    deployedPath: letterShooterDeployedPath,
    gitHubClientPath: letterShooterGitHubClientPath,
    gitHubServerPath: "",
  },
];

export default projects;
