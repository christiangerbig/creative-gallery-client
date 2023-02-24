import { useTranslation } from "react-i18next";
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
} from "../../lib/externalLinkPaths";
import { ProjectItem } from "../typeDefinitions";
import jungleSwapImage from "../../images/jungle-swap.png";
import trackerToolsImage from "../../images/trackertools.png";
import letterShooterImage from "../../images/letter-shooter.png";

export const useProjectsData = (): ProjectItem[] => {
  const { t } = useTranslation();

  return [
    {
      projectName: t("texts.projects.jungleSwap.name"),
      projectPicturePath: jungleSwapImage,
      projectVideoPath: jungleSwapVideoPath,
      projectDescription: t("texts.projects.jungleSwap.description"),
      deployedPath: jungleSwapDeployedPath,
      gitHubClientPath: jungleSwapGitHubClientPath,
      gitHubServerPath: jungleSwapGitHubServerPath,
    },
    {
      projectName: t("texts.projects.trackerTools.name"),
      projectPicturePath: trackerToolsImage,
      projectVideoPath: trackerToolsVideoPath,
      projectDescription: t("texts.projects.trackerTools.description"),
      deployedPath: trackerToolsDeployedPath,
      gitHubClientPath: trackerToolsGitHubClientPath,
      gitHubServerPath: "",
    },
    {
      projectName: t("texts.projects.letterShooter.name"),
      projectPicturePath: letterShooterImage,
      projectVideoPath: letterShooterVideoPath,
      projectDescription: t("texts.projects.letterShooter.description"),
      deployedPath: letterShooterDeployedPath,
      gitHubClientPath: letterShooterGitHubClientPath,
      gitHubServerPath: "",
    },
  ];
};
