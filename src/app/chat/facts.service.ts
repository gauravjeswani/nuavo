import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
    _facts: String[];

  constructor() {
    this._facts = new Array<String>();
    this._facts.push('Fact 1 to scroll.');
    this._facts.push('Fact 2 to scroll.');
    this._facts.push('Fact 3 to scroll.');
  }

  get facts() {
    return this._facts;
  }
}
