import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // az e tömb tartalmazza majd a szervertől érkező objektumokat

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // lekéri az összes adatot a szervertől, és abból kiválasztja az első 4 rekordot
  getHeroes(): void {
    this.heroService.getAllHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}
