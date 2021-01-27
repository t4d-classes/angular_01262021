import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Couleur, NewCouleur } from '../models/Couleur';

@Injectable({
  providedIn: 'root'
})
export class CouleursService {

  // private httpClient: HttpClient;

  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Couleur[]>('http://localhost:3060/colors');
  }

  append(couleur: NewCouleur) {
    return this.httpClient.post<Couleur>('http://localhost:3060/colors', couleur);
  }

  remove(couleurId: number) {
    const escapedCouleurId = encodeURIComponent(couleurId);
    const deleteCouleurUrl = `http://localhost:3060/colors/${escapedCouleurId}`;

    return this.httpClient.delete<void>(deleteCouleurUrl);
  }

}
