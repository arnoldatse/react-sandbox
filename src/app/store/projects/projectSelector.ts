import Project from "core/office/entities/Project";
import { ProjectsState } from "./projectsSlice";

interface State{
    projects: ProjectsState;
}

export const allProjectSelector = ()=>{
    return (state: State)=> state.projects.projects
}

export const findOneProjectSelector = (id: string)=>{
    return (state: State)=> state.projects.projects.find((project: Project)=>project.id === id)
}