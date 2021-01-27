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

  // state
  couleurList: Couleur[] = [];

  constructor(private couleursSvc: CouleursService) { }

  ngOnInit(): void {
    this.refreshCouleurs();
  }

  refreshCouleurs() {
    this.couleursSvc.all().subscribe((couleurs) => {
      this.couleurList = couleurs;
    });
  }

  removeCouleur(couleurId: number) {
    this.couleursSvc.remove(couleurId).subscribe(() => {
      this.refreshCouleurs();
    });
  }

  addCouleur(couleur: NewCouleur) {
    this.couleursSvc.append(couleur)
      .pipe(switchMap(() => this.couleursSvc.all()))
      .subscribe((couleurs) => {
        this.couleurList = couleurs;
      });
  }

}
