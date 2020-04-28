import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { ModalAComponent } from './modal-a/modal-a.component';
import { ModalBComponent } from './modal-b/modal-b.component';
import { ModalComponent } from './modal/modal.component';
import { View1Component } from './modal-a/view-1/view-1.component';
import { View2Component } from './modal-a/view-2/view-2.component';

@NgModule({
  imports: [BrowserModule,FormsModule,AppRoutingModule],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ModalAComponent,
    ModalBComponent,
    ModalComponent,
    View1Component,
    View2Component,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
