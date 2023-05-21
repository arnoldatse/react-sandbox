import "./projects.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "app/hooks/store";
import Project from "core/office/entities/Project";
import ProjectCard from "./components/projectCard/projectCard";

const Projects = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const projectListContainerClasses =
    path[2] === "projects" && path.length > 3 && path[3] !== ""
      ? "project-list-container sub-projects-path"
      : "project-list-container";

  const projects: Project[] = useAppSelector(
    (state) => state.projects.projects
  );
  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className={projectListContainerClasses}>
          <div className="projects-actions">
            <Link to="add" className="btn">
              Add New
            </Link>
          </div>
          <div className="projects-list-container">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <div className="sub-projects-path-container">
          <Outlet key={pathname} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
