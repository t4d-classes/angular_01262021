import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouleurHomeComponent } from './components/couleur-home/couleur-home.component';



@NgModule({
  // add things here which can be referenced from a template
  declarations: [CouleurHomeComponent],
  imports: [
    CommonModule
  ],
  // allow other modules to use this component in a template
  exports: [CouleurHomeComponent]
})
export class CouleurToolModule { }
