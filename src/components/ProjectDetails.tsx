import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProjectItem } from "../typeDefinitions";

type ProjectDetailsProps = {
  projectItem: ProjectItem;
};

const ProjectDetails = ({ projectItem }: ProjectDetailsProps): JSX.Element => {
  const {
    projectName,
    projectPicturePath,
    projectVideoPath,
    projectDescription,
    deployedPath,
    gitHubClientPath,
    gitHubServerPath,
  } = projectItem;
  const elementRef = useRef([]);

  // Set paragraph text
  useEffect(() => {
    (elementRef.current[0] as any).innerHTML = projectDescription;
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
        <h2> {projectName} </h2>
        <p
          ref={(descriptionTextElement) => {
            (elementRef.current[0] as any) = descriptionTextElement;
          }}
        ></p>
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
        {gitHubServerPath && (
          <div>
            <Link
              to={{ pathname: gitHubServerPath }}
              target="_blank"
              className="projectGitHubLink"
            >
              GIT HUB 2
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
