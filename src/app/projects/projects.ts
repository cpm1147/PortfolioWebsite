import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from '../project-card/project-card';


@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  constructor(private titleService: Title){
    this.titleService.setTitle('Willie Dong - Projects');
  }
}
