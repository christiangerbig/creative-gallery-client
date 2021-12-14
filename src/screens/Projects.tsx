import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { projectsTable } from "../lib/projectsTable";
import { ProjectItem } from "../typeDefinitions";
import HeaderText from "../components/HeaderText";
import ProjectDetails from "../components/ProjectDetails";

const Projects = (): JSX.Element => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="projectsPageContainer">
      <header className="headline">
        <HeaderText
          text={["My Web Developer projects", "I was working on"]}
          borderColor={"orange"}
        />
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
