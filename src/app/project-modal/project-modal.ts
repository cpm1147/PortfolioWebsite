import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule, CarouselModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css',
})
export class ProjectModal {
  project = {} as Project;
  
  isVideo(file: string): boolean {
    return file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.ogg');
  }

  constructor(public bsModalRef: BsModalRef){

  }
}
