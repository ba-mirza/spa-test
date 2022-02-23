import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbUrl = 'https://www.swapi.tech/api/';

  constructor(private http: HttpClient) {}

  getDataFilms(): Observable<any> {
    return this.http.get(this.dbUrl + '/films');
  }

  getActorsByFilms(): Observable<any> {
    const actors = this.http.get('https://www.swapi.tech/api/people/');
    const planets = this.http.get('https://www.swapi.tech/api/planets/');

    return forkJoin([actors, planets]);
  }

  getPlanets(): Observable<any> {
    return this.http.get(this.dbUrl + '/planets');
  }

  getStarships() {
    return null
  }

}
