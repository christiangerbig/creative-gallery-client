import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { projectsTable } from "../lib/projectsTable";
import { ProjectItem } from "../typeDefinitions";
import ProjectDetails from "../components/ProjectDetails";

const Projects = (): JSX.Element => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="projectsPageContainer">
      <header className="headline">
        <div className="headerText orangeBorder">
          <h1 className="textFat"> My Web Developer projects </h1>
          <h2 className="textBig"> I was working on </h2>
        </div>
      </header>
      <div className="projectsContainer">
        {projectsTable.map(
          (projectItem: ProjectItem, index: number): JSX.Element => {
            return <ProjectDetails projectItem={projectItem} key={index} />;
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
