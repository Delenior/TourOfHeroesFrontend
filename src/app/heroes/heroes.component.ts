import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', // ezzel hivatkozunk az app.component.html-ben erre a componentre
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]; // ez a tömb tartalmazza majd a szervertől visszakapott objektumokat

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes(); // az oldal betöltésekor azonnal lefut
  }

  // Az összes adatot lekéri a szervertől
  getHeroes(): void {
    this.heroService.getAllHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // Hős hozzáadásakor elmenti az input mezőbe beírt adatot és elküldi a szerverb felé
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // Az oldal újratöltésének implementációja
  refresh(): void {
    window.location.reload();
  }

  // Hős törlését megvalósító függvény
  delete(id: string): void {
    this.heroService.deleteHero(id).subscribe(
      response => {
        this.heroes = response;
      }
    )
  }
}
