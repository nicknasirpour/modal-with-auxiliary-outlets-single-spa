import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { ModalAComponent } from './modal-a/modal-a.component';
import { ModalBComponent } from './modal-b/modal-b.component';
import { View1Component } from './modal-a/view-1/view-1.component';
import { View2Component } from './modal-a/view-2/view-2.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: 'page1', pathMatch: 'full' },
  {
    path: 'page1',
    component: Page1Component,
    children: [
      {
        path: 'a',
        component: ModalAComponent,
        outlet: 'modal',
        children: [
          { path: '', redirectTo: 'view1', pathMatch: 'full' },
          { path: 'view1', component: View1Component },
          { path: 'view2', component: View2Component },
        ]
      },
      {
        path: 'b',
        component: ModalBComponent,
        outlet: 'modal'
      }
    ]
  },
  { path: 'page2', component: Page2Component },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }