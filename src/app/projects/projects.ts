import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';


@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

project: Project ={
  id: 0,
  name: 'Career Task Team',
  summary: 'Test description',
  description: '',
  projectLink: '',
  tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
  pictures: []
};

  constructor(private titleService: Title){
    this.titleService.setTitle('Willie Dong - Projects');
  }
}
