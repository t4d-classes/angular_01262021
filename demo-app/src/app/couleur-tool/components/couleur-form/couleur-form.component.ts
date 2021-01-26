import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Couleur } from '../../models/Couleur';

@Component({
  selector: 'app-couleur-form',
  templateUrl: './couleur-form.component.html',
  styleUrls: ['./couleur-form.component.css']
})
export class CouleurFormComponent implements OnInit {

  couleurForm!: FormGroup;

  @Output()
  submitCouleur = new EventEmitter<Couleur>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.couleurForm = this.fb.group({
      name: '',
      hexcode: '',
    });
  }

  doSubmitCouleur() {
    // object spread operator
    this.submitCouleur.emit({ ...this.couleurForm.value });

  }

}
