import { Component, OnInit } from '@angular/core';

import { Couleur } from '../../models/Couleur';

@Component({
  selector: 'app-couleur-home',
  templateUrl: './couleur-home.component.html',
  styleUrls: ['./couleur-home.component.css']
})
export class CouleurHomeComponent implements OnInit {

  headerText = 'Couleur Home';

  couleurList: Couleur[] = [
    { id: 1, name: 'rouge', hexcode: 'FF0000' },
    { id: 2, name: 'vert', hexcode: '00FF00'},
    { id: 3, name: 'bleu', hexcode: '0000FF' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
