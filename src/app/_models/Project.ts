import { Tag } from "./Tag";

export interface Project{
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    showProjectLink: boolean;
    media: string[];
    tags: Tag[];
}