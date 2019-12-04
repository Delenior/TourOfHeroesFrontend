import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ironman'},
      { id: 12, name: 'Captain America'},
      { id: 13, name: 'Thori'},
      { id: 14, name: 'Black Panther'},
      { id: 15, name: 'Hulk'},
      { id: 16, name: 'Romanoff'},
      { id: 17, name: 'Loki'},
      { id: 18, name: 'Spiderman'},
      { id: 19, name: 'Visio'},
      { id: 20, name: 'Hawk'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}