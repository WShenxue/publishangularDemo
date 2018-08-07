import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  @Input() hero: Hero;

  getHero(): void {
    const id = +this.router.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
