import { useTranslation } from "react-i18next";
import { ProjectItem } from "../../app/typeDefinitions";
import ExternalLink from "../helpers/ExternalLink";

interface ProjectDetailsProps {
  projectItem: ProjectItem;
}

const ProjectDetails = ({
  projectItem: {
    projectName,
    projectPicturePath,
    projectVideoPath,
    projectDescription,
    deployedPath,
    gitHubClientPath,
    gitHubServerPath,
  },
}: ProjectDetailsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="project-details-container">
      <video
        width="320"
        height="170"
        muted
        controls
        poster={projectPicturePath}
        src={projectVideoPath}
      />
      <div className="project-description">
        <article>
          <header>
            <h2>{projectName}</h2>
          </header>
          <div className="project-description-container">
            <p>{projectDescription}</p>
          </div>
        </article>
      </div>
      <div className="project-links-container">
        <div>
          <ExternalLink
            path={deployedPath}
            styleClass="project-try-it-link"
            text={t("link.startApp")}
          />
        </div>
        <div>
          <ExternalLink
            path={gitHubClientPath}
            styleClass="project-github-link"
            text={t("link.gitHubClient")}
          />
        </div>
        {gitHubServerPath && (
          <div>
            <ExternalLink
              path={gitHubServerPath}
              styleClass="project-github-link"
              text={t("link.gitHubServer")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
