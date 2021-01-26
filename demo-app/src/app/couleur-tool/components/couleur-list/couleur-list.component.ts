import { Component, OnInit, Input } from '@angular/core';

import { Couleur } from '../../models/Couleur';

@Component({
  selector: 'app-couleur-list',
  templateUrl: './couleur-list.component.html',
  styleUrls: ['./couleur-list.component.css']
})
export class CouleurListComponent implements OnInit {

  @Input()
  couleurs: Couleur[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
