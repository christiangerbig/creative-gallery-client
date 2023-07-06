import { useTranslation } from "react-i18next";
import {
  jungleSwapGitHubClientPath,
  jungleSwapGitHubServerPath,
  trackerToolsGitHubClientPath,
} from "../../lib/externalLinkPaths";
import { ProjectItem } from "../typeDefinitions";
import jungleSwapImageDesktop from "../../images/Jungleswap-Screenshot-desktop.png";
import jungleSwapImageMobile from "../../images/JungleSwap-Screenshot-Mobile.png";
import trackertoolsImageDesktop from "../../images/Trackertools-screenshot-desktop.png";
import trackertoolsImageMobile from "../../images/Trackertools-screenshow-mobile.png";

export const useProjectsData = (): ProjectItem[] => {
  const { t } = useTranslation();

  return [
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
      gitHubClientPath: trackerToolsGitHubClientPath,
      gitHubServerPath: "",
    },
  ];
};
