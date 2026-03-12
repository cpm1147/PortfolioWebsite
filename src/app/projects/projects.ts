import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsServices } from '../_services/projects-services'


@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit{

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsServices){
    this.titleService.setTitle('Willie Dong - Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
