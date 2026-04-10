import { Tag } from "./Tag";

export interface Project{
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    gitHubLink: string;
    showProjectLink: boolean;
    showGitHubLink: boolean;
    media: string[];
    tags: Tag[];
}