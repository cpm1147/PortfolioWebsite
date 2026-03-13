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
      summary: 'Test description',
      description: '',
      projectLink: '',
      tags: [Tag.REACT, Tag.JAVASCRIPT],
      pictures: ['/images/Screenshot 2026-03-03 164540.png', '/images/Screenshot 2026-03-12 211051.png']
    },
    {
      id: 1,
      name: 'SPEED Article Manager',
      summary: 'Test description',
      description: '',
      projectLink: '',
      tags: [Tag.REACT, Tag.TYPESCRIPT],
      pictures: []
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
