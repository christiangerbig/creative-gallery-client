import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import projects from "../lib/projectsTable";
import { ProjectItem } from "../typeDefinitions";
import HeaderText from "../components/HeaderText";
import ProjectDetails from "../components/ProjectDetails";

const Projects = (): JSX.Element => {
  const { t } = useTranslation();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="projects-page-container">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("projects.headline"),
            subheadline: t("projects.subheadline"),
          }}
          borderColorName={"orange"}
        />
      </header>
      <div className="projects-container">
        {projects.map(
          (projectItem: ProjectItem, index: number): JSX.Element => {
            return <ProjectDetails projectItem={projectItem} key={index} />;
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
