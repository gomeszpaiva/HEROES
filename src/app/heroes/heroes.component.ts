import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[]=[]
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService){}

  ngOnInit(): void{
    this.getHeroes()
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Heroi selecionado de id=${hero.id}`)
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(hero => this.heroes = hero)
  }
}
