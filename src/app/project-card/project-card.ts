import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModal } from '../project-modal/project-modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-card',
  imports: [CarouselModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
   
  ngAfterViewInit() {
    const controls = document.querySelectorAll(
      '.carousel-control-prev, .carousel-control-next, .carousel-indicators'
    );

    controls.forEach(control => {
      control.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });
  }

  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService){

  }

  OpenProjectModal(){
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project 
      }
    };

    this.bsModalRef = this.modalService.show(ProjectModal, modalOptions);
  }
}
