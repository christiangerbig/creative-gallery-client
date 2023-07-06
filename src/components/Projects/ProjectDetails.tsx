import { useTranslation } from "react-i18next";
import { ProjectItem } from "../../app/typeDefinitions";
import ExternalLink from "../helpers/ExternalLink";

interface ProjectDetailsProps {
  projectItem: ProjectItem;
}

const ProjectDetails = ({
  projectItem: {
    projectName,
    projectPicturePath1,
    projectPicturePath2,
    projectDescription,
    gitHubClientPath,
    gitHubServerPath,
  },
}: ProjectDetailsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="project-details">
      <div className="project-details__screenshots-box">
        <div className="project-details__screenshot-desktop">
          <img
            src={projectPicturePath1}
            alt=""
            className="project-details__screenshot-desktop__image"
          />
        </div>
        <div className="project-details__screenshot-mobile">
          <img
            src={projectPicturePath2}
            alt=""
            className="project-details__screenshot-mobile__image"
          />
        </div>
      </div>
      <div className="project-details__description">
        <article>
          <header>
            <h3 className="project-details__description__project-name">
              {projectName}
            </h3>
          </header>
          <p className="project-details__description__paragraph">
            {projectDescription}
          </p>
        </article>
        <div className="project-links">
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
    </div>
  );
};

export default ProjectDetails;
