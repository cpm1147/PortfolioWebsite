import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsServices } from '../_services/projects-services'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-projects',
  imports: [ProjectCard, CollapseModule, FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit{

  projects = {} as Project[];

  isColapsed: boolean = true;

  typeScript: boolean = false;
  react: boolean = false;

  isFiltering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsServices){
    this.titleService.setTitle('Willie Dong - Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typeScript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    
    if(this.react){
      filterTags.push(Tag.REACT);
    }

    if(this.typeScript || this.react){
      this.isFiltering = true;
    }else{
      this.isFiltering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters(){
    this.typeScript = false;
    this.react = false;

    this.isFiltering = false;

    this.projects = this.projectService.GetProjects();
  }
}
