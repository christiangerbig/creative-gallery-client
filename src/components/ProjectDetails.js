import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProjectDetails = ({
  projectName,
  projectPicture,
  projectVideoPath,
  projectStack,
  projectDescription,
  deployedPath,
  gitHubClientPath,
  gitHubServerPath,
}) => {
  const elementRef = useRef([]);

  useEffect(() => {
    elementRef.current[0].innerHTML = projectStack;
    elementRef.current[1].innerHTML = projectDescription;
  }, []);

  return (
    <div className="projectDetailsContainer">
      <div>
        <video
          width="360"
          height="200"
          autoplay
          muted
          controls
          poster={projectPicture}
          src={projectVideoPath}
        />
      </div>
      <div>
        <h3> {projectName} </h3>
        <h4 ref={(element) => (elementRef.current[0] = element)}> </h4>
        <p ref={(element) => (elementRef.current[1] = element)}> </p>
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
