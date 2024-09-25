import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add('HeroService: Listagem herois')
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(hero => hero.id == id)!;
    this.messageService.add(`Hero Service: heroi selecionado id=${id}`)
    return of(hero);
  }  
}