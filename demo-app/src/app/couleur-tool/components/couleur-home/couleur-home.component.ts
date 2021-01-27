import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Couleur, NewCouleur } from '../../models/Couleur';
import { CouleursService } from '../../services/couleurs.service';

@Component({
  selector: 'app-couleur-home',
  templateUrl: './couleur-home.component.html',
  styleUrls: ['./couleur-home.component.css']
})
export class CouleurHomeComponent implements OnInit {

  headerText = 'Couleur Home';

  errorMessage = '';

  // state
  couleurList: Couleur[] = [];

  constructor(private couleursSvc: CouleursService) { }

  ngOnInit(): void {
    this.refreshCouleurs();
  }

  refreshCouleurs() {
    this.couleursSvc.all().subscribe(this.createRefreshSubscriber());
  }

  removeCouleur(couleurId: number) {

    this.couleursSvc.remove(couleurId)
      .pipe(switchMap(() => this.couleursSvc.all()))
      .subscribe(this.createRefreshSubscriber());
  }

  addCouleur(couleur: NewCouleur) {
    this.couleursSvc.append(couleur)
      .pipe(switchMap(() => this.couleursSvc.all()))
      .subscribe(this.createRefreshSubscriber());
  }

  private createRefreshSubscriber() {
    return {
      next: (couleurs: Couleur[]) => {
        this.couleurList = couleurs;
        this.errorMessage = '';
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage = 'Call to the REST API failed';
      },
      complete: () => {
        console.log('the observable completed');
      }
    };    
  }
}
