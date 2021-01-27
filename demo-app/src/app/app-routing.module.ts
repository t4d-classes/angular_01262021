import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CouleurHomeComponent } from './couleur-tool/components/couleur-home/couleur-home.component';
import { NewCouleurComponent } from './couleur-tool/components/new-couleur/new-couleur.component';

const routes: Routes = [
  { path: 'couleur-list', component: CouleurHomeComponent },
  { path: 'new-couleur-form', component: NewCouleurComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
