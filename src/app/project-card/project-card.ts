import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
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
