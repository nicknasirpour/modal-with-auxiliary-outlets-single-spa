import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-b',
  templateUrl: './modal-b.component.html'
})
export class ModalBComponent  {
  modalClose(event) {
    console.log(event);
  }
}
