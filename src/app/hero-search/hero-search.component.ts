import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap, filter
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes: Hero[];
  newHeroes: Hero[] = [];
  ciklusvaltozo: number = 0;
  feltetel: string;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();

  }

  search(bemenet: string): void {
    this.newHeroes = [];
    this.newHeroes.length = 0;
    this.ciklusvaltozo = 0;
    if (bemenet === '') {
    } else {
      for (let hero of this.heroes) {
        if (hero.name.toLowerCase().includes(bemenet.toLowerCase())) {
            this.newHeroes[this.ciklusvaltozo] = hero;
            this.ciklusvaltozo++;
        }
      }
    }
  }


  getHeroes(): void {
    this.heroService.getAllHeroes()
        .subscribe(heroes => this.heroes = heroes,
          );
  }


}
