import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes: Hero[]; // a szervertől kapott hősöket tárolja egy objektumokat tartalmazó tömbben
  newHeroes: Hero[] = []; // tömb inicializásáa, így már nem undefined
  ciklusvaltozo = 0; // a keresési algoritmushoz szükséges változó
  feltetel: string; // a html-ből kapja meg az inputot (keresési input)

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes(); // a lap betöltésénél azonnal lefut a kérés
  }

  // A keresés algritmusa, nem a szerver végzi a keresést, hanem frontenden oldottam meg
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

  // Az összes adatot lekéri a szervertől
  getHeroes(): void {
    this.heroService.getAllHeroes()
        .subscribe(heroes => this.heroes = heroes,
          );
  }


}
