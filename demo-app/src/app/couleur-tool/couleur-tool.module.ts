import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CouleurHomeComponent } from './components/couleur-home/couleur-home.component';
import { CouleurListComponent } from './components/couleur-list/couleur-list.component';



@NgModule({
  // add things here which can be referenced from a template
  declarations: [CouleurHomeComponent, CouleurListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  // allow other modules to use this component in a template
  exports: [CouleurHomeComponent]
})
export class CouleurToolModule { }
