import { RefObject, useEffect, useRef } from "react";
import { ProjectItem } from "../typeDefinitions";
import ExternalLink from "./ExternalLink";

type ProjectDetailsProps = {
  projectItem: ProjectItem;
};

const ProjectDetails = ({ projectItem }: ProjectDetailsProps): JSX.Element => {
  const descriptionContainerRef = useRef<HTMLDivElement>(null);
  const {
    projectName,
    projectPicturePath,
    projectVideoPath,
    projectDescription,
    deployedPath,
    gitHubClientPath,
    gitHubServerPath,
  } = projectItem;

  useEffect(() => {
    const setDescriptionText = (
      elementRef: RefObject<HTMLDivElement>,
      text: string
    ): void => {
      (elementRef as any).current.innerHTML = text;
    };

    setDescriptionText(descriptionContainerRef, projectDescription);
  }, []);

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
          <div
            ref={descriptionContainerRef}
            className="descriptionContainer"
          ></div>
        </article>
      </div>
      <div className="projectLinksContainer">
        <div>
          <ExternalLink
            linkPath={deployedPath}
            linkClass="projectTryItLink"
            linkText="TRY IT"
          />
        </div>
        <div>
          <ExternalLink
            linkPath={gitHubClientPath}
            linkClass="projectGitHubLink"
            linkText="GIT HUB"
          />
        </div>
        <div hidden={gitHubServerPath ? false : true}>
          <ExternalLink
            linkPath={gitHubServerPath}
            linkClass="projectGitHubLink"
            linkText="GIT HUB 2"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
