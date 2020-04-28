import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-a',
  templateUrl: './modal-a.component.html'
})
export class ModalAComponent  {
  modalClose(event) {
    console.log(event);
  }
}
