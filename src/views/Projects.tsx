import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import projects from "../lib/projectsTable";
import { ProjectItem } from "../typeDefinitions";
import HeaderText from "../components/helpers/HeaderText";
import ProjectDetails from "../components/Projects/ProjectDetails";

const Projects = (): JSX.Element => {
  const { t } = useTranslation();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="projects-page-container" data-cy="projects-page">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("texts.projects.headline"),
            subheadline: t("texts.projects.subheadline"),
          }}
          borderColorName={"orange"}
        />
      </header>
      <div className="projects-container">
        {projects.map(
          (projectItem: ProjectItem, index: number): JSX.Element => {
            return (
              <ProjectDetails
                projectItem={projectItem}
                key={`${projectItem.projectName}${index.toString()}`}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
