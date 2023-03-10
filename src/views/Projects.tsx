import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useProjectsData } from "../app/custom-hooks/useProjectsData";
import { ProjectItem } from "../app/typeDefinitions";
import HeaderText from "../components/helpers/HeaderText";
import ProjectDetails from "../components/projects/ProjectDetails";

const Projects = (): JSX.Element => {
  const { t } = useTranslation();
  const projectsData = useProjectsData();
  const { scrollToTop } = scroll;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="projects" data-cy="projects-page">
      <header className="header">
        <HeaderText
          headlines={{
            headline: t("texts.projects.headline"),
            subheadline: t("texts.projects.subheadline"),
          }}
          borderColorName={"orange"}
        />
      </header>
      <div className="projects__collection">
        {projectsData.map(
          (projectItem: ProjectItem, index: number): JSX.Element => (
            <ProjectDetails
              projectItem={projectItem}
              key={`${projectItem.projectName}${index.toString()}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
