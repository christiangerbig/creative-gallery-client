import { Link } from "react-router-dom";
import { CVProjectItem } from "../screens/CV";

type CVProjectDetailsProps = {
  cvProjectItem: CVProjectItem;
};

const CVProjectDetails = ({ cvProjectItem }: CVProjectDetailsProps) => {
  const {
    projectTitle,
    gitHubClientPathname,
    gitHubServerPathname,
    deployedPathname,
    projectDescription,
  } = cvProjectItem;

  return (
    <div className="cvProjectDetailContainer">
      <div className="cvProjectContainer">
        <h4> {projectTitle} </h4>
        <div>
          <Link
            to={{ pathname: gitHubClientPathname }}
            target="_blank"
            className="cvProjectLink"
          >
            GitHubClient
          </Link>
        </div>
        {gitHubServerPathname && (
          <div>
            <Link
              to={{ pathname: gitHubServerPathname }}
              target="_blank"
              className="cvProjectLink"
            >
              GitHubServer
            </Link>
          </div>
        )}
        <div>
          <Link
            to={{ pathname: deployedPathname }}
            target="_blank"
            className="cvProjectLink"
          >
            Deployment
          </Link>
        </div>
      </div>
      <p> {projectDescription} </p>
    </div>
  );
};

export default CVProjectDetails;
