import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { catchError, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  heroesUrl = 'apli/heroes'

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);  
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.httpClient.get<Hero>(url).pipe(
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  updateHero(hero: Hero): Observable<any>{
    return this.httpClient.put(this.heroesUrl, hero).pipe(
      catchError(this.handleError<any>('updateHero'))
    )
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.httpClient.post<Hero>(this.heroesUrl, hero).pipe(
      catchError(this.handleError<any>('Add Hero'))
    )
  }


  deleteHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`
    return this.httpClient.delete<Hero>(url).pipe(
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }

  searchHero(term: string): Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.httpClient.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
    catchError(this.handleError<Hero[]>('Search Heroes', []))
  }
}