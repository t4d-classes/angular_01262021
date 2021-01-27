import { Component, OnInit } from '@angular/core';

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
    this.couleurList = this.couleurList.filter(c => c.id !== couleurId);
  }

  addCouleur(couleur: NewCouleur) {
    //                    // array literal syntax
    // this.couleurList = [
    //   // array spread operator
    //   ...this.couleurList,
    //   // object literal syntax
    //   {
    //     // object spread operator
    //     ...couleur, // copy the name and hexcode to a new object
    //                 // argument spread operator
    //     id: Math.max(...this.couleurList.map(c => c.id), 0) + 1, // calculate the id
    //   },
    // ];

    this.couleursSvc.append(couleur).subscribe(() => {
      this.refreshCouleurs();
    });

  }

}
