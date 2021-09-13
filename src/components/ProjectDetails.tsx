import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProjectItem } from "../screens/Projects";

type ProjectDetailsProps = {
  projectItem: ProjectItem;
};

const ProjectDetails = ({ projectItem }: ProjectDetailsProps) => {
  const {
    projectName,
    projectPicturePath,
    projectVideoPath,
    projectStack,
    projectDescription,
    deployedPath,
    gitHubClientPath,
    gitHubServerPath,
  } = projectItem;
  const elementRef = useRef([]);

  useEffect(() => {
    (elementRef.current[0] as any).innerHTML = projectStack;
    (elementRef.current[1] as any).innerHTML = projectDescription;
  }, []);

  return (
    <div className="projectDetailsContainer">
      <div>
        <video
          width="360"
          height="200"
          muted
          controls
          poster={projectPicturePath}
          src={projectVideoPath}
        />
      </div>
      <div>
        <h3> {projectName} </h3>
        <h4 ref={(element) => ((elementRef.current[0] as any) = element)}> </h4>
        <p ref={(element) => ((elementRef.current[1] as any) = element)}> </p>
      </div>
      <div className="projectLinksContainer">
        <div>
          <Link
            to={{ pathname: deployedPath }}
            target="_blank"
            className="projectTryItLink"
          >
            Try it out
          </Link>
        </div>
        <div>
          <Link
            to={{ pathname: gitHubClientPath }}
            target="_blank"
            className="projectGitHubLink"
          >
            GitHub Client
          </Link>
        </div>
        {gitHubServerPath && (
          <div>
            <Link
              to={{ pathname: gitHubServerPath }}
              target="_blank"
              className="projectGitHubLink"
            >
              GitHub Server
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
