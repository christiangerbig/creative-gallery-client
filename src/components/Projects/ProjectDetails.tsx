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
    <div className="project-details">
      <video
        width="320"
        height="170"
        muted
        controls
        poster={projectPicturePath}
        src={projectVideoPath}
      />
      <div className="project-details__description">
        <article>
          <header>
            <h2 className="project-details__description__project-name">
              {projectName}
            </h2>
          </header>
          <p className="project-details__description__paragraph">
            {projectDescription}
          </p>
        </article>
      </div>
      <div className="project-links">
        <div>
          <ExternalLink
            path={deployedPath}
            styleClass="project-links__try-it-link"
            text={t("link.startApp")}
          />
        </div>
        <div>
          <ExternalLink
            path={gitHubClientPath}
            styleClass="project-links__github-link"
            text={t("link.gitHubClient")}
          />
        </div>
        {gitHubServerPath && (
          <div>
            <ExternalLink
              path={gitHubServerPath}
              styleClass="project-links__github-link"
              text={t("link.gitHubServer")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
