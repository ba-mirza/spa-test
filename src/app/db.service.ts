import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from './_models/film-interface';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbUrl = 'https://www.swapi.tech/api/';

  constructor(private http: HttpClient) {}

  getDataFilms(): Observable<any> {
    return this.http.get(this.dbUrl + '/films');
  }

  getActorsByFilms() {
    return null
  }

  getPlanets(): Observable<any> {
    return this.http.get(this.dbUrl + '/planets');
  }

  getStarships() {
    return null
  }

}
