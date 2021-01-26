import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CouleurHomeComponent } from './components/couleur-home/couleur-home.component';
import { CouleurListComponent } from './components/couleur-list/couleur-list.component';
import { CouleurFormComponent } from './components/couleur-form/couleur-form.component';



@NgModule({
  // add things here which can be referenced from a template
  declarations: [CouleurHomeComponent, CouleurListComponent, CouleurFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  // allow other modules to use this component in a template
  exports: [CouleurHomeComponent]
})
export class CouleurToolModule { }
