import "./projectCard.css";
import { Link } from "react-router-dom";
import Project from "core/office/entities/Project";
import { useAppDispatch } from "app/hooks/store";
import { remove } from "app/store/projects/projectsSlice";
import { useState } from "react";

const ProjectCard = ({ project }: { project: Project }) => {
  const dispatch = useAppDispatch();
  const [showDesc, setShowDesc] = useState(false);
  const removeProject = (id: string) => {
    if (window.confirm("Are you sure to delete this")) dispatch(remove(id));
  };

  const toggleDesc = () => {
    setShowDesc(!showDesc);
  };

  return (
    <div className="project-card">
      <div className="content">
        <div className="head">
          <div className="title">{project.title}</div>
          <div className="actions">
            <Link
              to={`/office/projects/edit/${project.id}`}
              className="link action-card"
            >
              Edit
            </Link>
            <span
              onClick={() => removeProject(project.id)}
              className="link span-link action-card"
            >
              Delete
            </span>
          </div>
        </div>
        <div className={showDesc ? "desc show" : "desc"}>
          <div className="content">{project.desc}</div>
        </div>
        <div className="bottom" onClick={toggleDesc}>
          <span className={showDesc ? "down" : ""}>&#8249;</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
