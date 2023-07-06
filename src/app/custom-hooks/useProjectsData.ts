import { useTranslation } from "react-i18next";
import {
  pahnkeMovieNightGitHubPath,
  jungleSwapGitHubClientPath,
  jungleSwapGitHubServerPath,
  trackerToolsGitHubPath,
} from "../../lib/externalLinkPaths";
import { ProjectItem } from "../typeDefinitions";
import pahnkeMovieNightImageDesktop from "../../images/PahnkeMovieNight-screenshot-desktop.png";
import pahnkeMovieNightImageMobile from "../../images/PahnkeMovieNight-screenshot-mobile.png";
import jungleSwapImageDesktop from "../../images/JungleSwap-screenshot-desktop.png";
import jungleSwapImageMobile from "../../images/JungleSwap-screenshot-mobile.png";
import trackertoolsImageDesktop from "../../images/Trackertools-screenshot-desktop.png";
import trackertoolsImageMobile from "../../images/Trackertools-screenshot-mobile.png";

export const useProjectsData = (): ProjectItem[] => {
  const { t } = useTranslation();

  return [
    {
      projectName: t("texts.projects.pahnkeMovieNight.name"),
      projectPicturePath1: pahnkeMovieNightImageDesktop,
      projectPicturePath2: pahnkeMovieNightImageMobile,
      projectDescription: t("texts.projects.pahnkeMovieNight.description"),
      gitHubClientPath: pahnkeMovieNightGitHubPath,
      gitHubServerPath: "",
    },
    {
      projectName: t("texts.projects.jungleSwap.name"),
      projectPicturePath1: jungleSwapImageDesktop,
      projectPicturePath2: jungleSwapImageMobile,
      projectDescription: t("texts.projects.jungleSwap.description"),
      gitHubClientPath: jungleSwapGitHubClientPath,
      gitHubServerPath: jungleSwapGitHubServerPath,
    },
    {
      projectName: t("texts.projects.trackerTools.name"),
      projectPicturePath1: trackertoolsImageDesktop,
      projectPicturePath2: trackertoolsImageMobile,
      projectDescription: t("texts.projects.trackerTools.description"),
      gitHubClientPath: trackerToolsGitHubPath,
      gitHubServerPath: "",
    },
  ];
};
