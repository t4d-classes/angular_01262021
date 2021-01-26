import { Component, OnInit } from '@angular/core';

import { Couleur } from '../../models/Couleur';

@Component({
  selector: 'app-couleur-home',
  templateUrl: './couleur-home.component.html',
  styleUrls: ['./couleur-home.component.css']
})
export class CouleurHomeComponent implements OnInit {

  headerText = 'Couleur Home';

  // state
  couleurList: Couleur[] = [
    { id: 1, name: 'rouge', hexcode: 'FF0000' },
    { id: 2, name: 'vert', hexcode: '00FF00'},
    { id: 3, name: 'bleu', hexcode: '0000FF' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeCouleur(couleurId: number) {
    this.couleurList = this.couleurList.filter(c => c.id !== couleurId);
  }

  addCouleur(couleur: Couleur) {
                       // array literal syntax
    this.couleurList = [
      // array spread operator
      ...this.couleurList,
      // object literal syntax
      {
        // object spread operator
        ...couleur, // copy the name and hexcode to a new object
                    // argument spread operator
        id: Math.max(...this.couleurList.map(c => c.id), 0) + 1, // calculate the id
      },
    ];

  }

}
