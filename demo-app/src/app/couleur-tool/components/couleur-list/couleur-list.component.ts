import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

import { Couleur } from '../../models/Couleur';

@Component({
  selector: 'app-couleur-list',
  templateUrl: './couleur-list.component.html',
  styleUrls: ['./couleur-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouleurListComponent implements OnInit {

  @Input()
  couleurs: Couleur[] = [];

  @Output()
  removeCouleur = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doRemoveCouleur(couleurId: number) {
    this.removeCouleur.emit(couleurId);
  }

}
