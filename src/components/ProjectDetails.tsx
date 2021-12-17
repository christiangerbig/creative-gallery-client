import { RefObject, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProjectItem } from "../typeDefinitions";

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
    const setDescriptionText = (elementRef: RefObject<HTMLDivElement>, text: string): void => {
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
          <Link
            to={{ pathname: deployedPath }}
            target="_blank"
            className="projectTryItLink"
          >
            TRY IT
          </Link>
        </div>
        <div>
          <Link
            to={{ pathname: gitHubClientPath }}
            target="_blank"
            className="projectGitHubLink"
          >
            GIT HUB
          </Link>
        </div>
        <div hidden={gitHubServerPath ? false : true}>
          <Link
            to={{ pathname: gitHubServerPath }}
            target="_blank"
            className="projectGitHubLink"
          >
            GIT HUB 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
