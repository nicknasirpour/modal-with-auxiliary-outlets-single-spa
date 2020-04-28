import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  exportAs: 'modal'
})
export class ModalComponent {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  @Input() page: string;

  constructor(private router: Router) {}
    
  closeModal(event) {
    this.router.navigate([this.page, { outlets: { modal: null }}]);
    this.modalClose.next(event);
  }
}