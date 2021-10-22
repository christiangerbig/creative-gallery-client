import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProjectItem } from "../screens/Projects";

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
          ref={(element) => {
            (elementRef.current[0] as any) = element;
          }}
        >
        </p>
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
