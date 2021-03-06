import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { CouleurHomeComponent } from './components/couleur-home/couleur-home.component';
import { CouleurListComponent } from './components/couleur-list/couleur-list.component';
import { CouleurFormComponent } from './components/couleur-form/couleur-form.component';
import { NewCouleurComponent } from './components/new-couleur/new-couleur.component';



@NgModule({
  // add things here which can be referenced from a template
  declarations: [CouleurHomeComponent, CouleurListComponent, CouleurFormComponent, NewCouleurComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  // allow other modules to use this component in a template
  exports: [CouleurHomeComponent]
})
export class CouleurToolModule { }
