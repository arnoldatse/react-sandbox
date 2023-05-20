import "./projects.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "@app/hooks/store";
import Project from "core/office/entities/Project";
import ProjectCard from "./components/projectCard/projectCard";

const Projects = () => {
  const {pathname} = useLocation()

  const projects: Project[] = useAppSelector(
    (state) => state.projects.projects
  );
  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="project-list-container">
          <Link to="add" className="btn">Add New</Link>
          <div className="projects-list-container">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <Outlet key={pathname} />
      </div>
    </div>
  );
};

export default Projects;
