import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Endpoints } from './util/endpoints';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    /** GET hero by id. Will 404 if id not found */
  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(Endpoints.GET_ONE + id);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  /**private heroesUrl = 'api/heroes';  // URL to web api*/

/** GET heroes from the server */
getAllHeroes(): Observable<Array<Hero>> {
  return this.http.get<Array<Hero>>(Endpoints.GET_ALL);
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
updateHero(hero: Hero): Observable<Hero> {
  return this.http.put<Hero>(Endpoints.UPDATE_ONE, hero);
}

/** POST: add a new hero to the server */
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(Endpoints.CREATE_ONE, hero);
}

/** DELETE: delete the hero from the server */
deleteHero(id: string): Observable<Array<Hero>> {
  console.log(id);
    return this.http.delete<Array<Hero>>(Endpoints.DELETE_ONE + id);
}

 /*/* GET heroes whose name contains search term *
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}*/
}
