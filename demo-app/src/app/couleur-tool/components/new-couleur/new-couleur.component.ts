import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewCouleur } from '../../models/Couleur';
import { CouleursService } from '../../services/couleurs.service';

@Component({
  selector: 'app-new-couleur',
  templateUrl: './new-couleur.component.html',
  styleUrls: ['./new-couleur.component.css']
})
export class NewCouleurComponent implements OnInit {

  errorMessage = '';

  constructor(
    private router: Router,
    private couleursSvc: CouleursService
  ) { }

  ngOnInit(): void {
  }

  addCouleur(couleur: NewCouleur) {
    this.couleursSvc.append(couleur)
      .subscribe(this.createAppendSubscriber());
  }

  private createAppendSubscriber() {
    return {
      next: () => {
        this.router.navigateByUrl('/couleur-list');
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage = 'Call to the REST API failed';
      },
    }
  }

}
