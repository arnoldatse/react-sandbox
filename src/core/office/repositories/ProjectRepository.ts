import Project from "../entities/Project";

export default interface ProjectRepository{
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    update(id: string): Promise<Project>;
    delete(id: string): Promise<void>;
}