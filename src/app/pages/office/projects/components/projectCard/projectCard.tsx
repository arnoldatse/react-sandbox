import "./projectCard.css";
import { Link } from "react-router-dom";
import Project from "core/office/entities/Project";
import { useAppDispatch } from "@app/hooks/store";
import { remove } from "@app/store/projects/projectsSlice";

const ProjectCard = ({ project }: { project: Project }) => {
  const dispatch = useAppDispatch();
  const removeProject = (id: string)=>{
    dispatch(remove(id));
  }
  return (
    <div className="project-card">
      <div className="content">
        <div className="head">
          <div className="title">{project.title}</div>
          <div className="actions">
            <Link to={`/office/projects/edit/${project.id}`} className="link">
              Editer
            </Link>
            <span onClick={()=>removeProject(project.id)} className="link span-link">
              Supprimer
            </span>
          </div>
        </div>
        <div className="desc">{project.desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
