import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CouleurHomeComponent } from './couleur-tool/components/couleur-home/couleur-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CouleurHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
