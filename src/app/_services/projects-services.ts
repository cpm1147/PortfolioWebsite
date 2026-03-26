import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServices {
  projects: Project[] = [
    {
      id: 0,
      name: 'Career Task Team',
      summary: 'A full-stack web application designed Go Bear AI built using React, Express and Firebase',
      description: '',
      projectLink: 'https://future-forge-project.vercel.app/',
      tags: [Tag.REACT, Tag.JAVASCRIPT],
      pictures: ['/images/gobear/Screenshot 2026-03-03 164540.png', '/images/gobear/Screenshot 2026-03-12 211051.png']
    },
    {
      id: 1,
      name: 'SPEED Article Manager',
      summary: 'This is a full-stack web application for managing, moderating, and reviewing articles. Users can register, log in, submit ,and access articles, while admins have elevated permissions for moderation and user management.',
      description: '',
      projectLink: 'https://speed-article-manager-willies-projects-baa3ebec.vercel.app/',
      tags: [Tag.REACT, Tag.TYPESCRIPT],
      pictures: ['/images/SPEED/Screenshot 2026-03-19 213619.png', '/images/SPEED/Screenshot 2026-03-19 213643.png']
    },
    {
      id: 2,
      name: '3D RPG',
      summary: 'Test description',
      description: '',
      projectLink: '',
      tags: [Tag.CSHARP, Tag.UNITY],
      pictures: []
    },
    {
      id: 3,
      name: 'Flight Booking System',
      summary: 'Test description',
      description: '',
      projectLink: '',
      tags: [Tag.JAVA],
      pictures: []
    },
    
    {
      id: 4,
      name: 'Portfolio Website',
      summary: 'Test description',
      description: '',
      projectLink: '',
      tags: [Tag.TYPESCRIPT],
      pictures: []
    },
  ];

  GetProjects(){
    return this.projects;
  }

  GetProjectsById(id: number) : Project{
    let project = this.projects.find(project => project.id===id);
    if( project === undefined){
      throw new TypeError('There is no project that matches the id:' + id);
    }
    return project;
  }

  GetProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
  
}
