import { Hero } from '../hero';
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero(); // az oldal betöltésénél azonnal lefut
  }

  // visszaadja az a hero objektumot azonosító alapján
  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroById(id)
        .subscribe(hero => this.hero = hero);
  }

  // vissza gomb logikájának implementálása
  goBack(): void {
    this.location.back();
  }

  // a refresh gomb használja, frissíti az oldalt
  refresh(): void {
    window.location.reload();
  }

  // a hős neve módosítható, ez a függvény valósítja meg ezt a funkciót
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
