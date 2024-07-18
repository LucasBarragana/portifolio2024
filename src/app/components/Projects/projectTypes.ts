// src/projectTypes.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    techImages: string[];
    mainImage: string;
    secondaryImages: string[];
    githubLink: string;
    liveLink: string;
}
