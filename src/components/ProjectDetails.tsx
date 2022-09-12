import { useTranslation } from "react-i18next";
import { ProjectItem } from "../typeDefinitions";
import ExternalLink from "./ExternalLink";

type ProjectDetailsProps = {
  projectItem: ProjectItem;
};

const ProjectDetails = ({ projectItem }: ProjectDetailsProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    projectName,
    projectPicturePath,
    projectVideoPath,
    projectDescription,
    deployedPath,
    gitHubClientPath,
    gitHubServerPath,
  } = projectItem;

  return (
    <div className="projectDetailsContainer">
      <video
        width="320"
        height="200"
        muted
        controls
        poster={projectPicturePath}
        src={projectVideoPath}
      />
      <div className="projectDescription">
        <article>
          <header>
            <h2> {projectName} </h2>
          </header>
          <div className="descriptionContainer">
            <p> {projectDescription} </p>
          </div>
        </article>
      </div>
      <div className="projectLinksContainer">
        <div>
          <ExternalLink
            linkPath={deployedPath}
            linkClass="projectTryItLink"
            linkText={t("projects.projectDetails.startApp")}
          />
        </div>
        <div>
          <ExternalLink
            linkPath={gitHubClientPath}
            linkClass="projectGitHubLink"
            linkText={t("projects.projectDetails.gitHubClient")}
          />
        </div>
        {gitHubServerPath && (
          <div>
            <ExternalLink
              linkPath={gitHubServerPath}
              linkClass="projectGitHubLink"
              linkText={t("projects.projectDetails.gitHubServer")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
