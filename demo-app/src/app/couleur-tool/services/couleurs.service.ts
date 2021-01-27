import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Couleur } from '../models/Couleur';

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
}
