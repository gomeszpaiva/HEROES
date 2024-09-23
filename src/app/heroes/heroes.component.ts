import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[]=[]
  selectedHero?: Hero;

  constructor(private heroService: HeroService){}

  ngOnInit(): void{
    this.getHeroes()
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes()
  }
}
