import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Spiderman' },
      { id: 13, name: 'Iron Man' },
      { id: 14, name: 'Batman' },
      { id: 15, name: 'Wonder Woman' },
      { id: 16, name: 'Flash' },
      { id: 17, name: 'Wolverine' },
      { id: 18, name: 'Deadpool' },
      { id: 19, name: 'Constantine' },
      { id: 20, name: 'Black Panther' },
      { id: 21, name: 'Mister Fantastic' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}