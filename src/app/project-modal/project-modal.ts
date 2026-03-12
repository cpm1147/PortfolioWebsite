import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  imports: [CarouselModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css',
})
export class ProjectModal {
  project = {} as Project;


  constructor(public bsModalRef: BsModalRef){

  }
}
