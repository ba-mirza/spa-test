import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbUrl = 'https://www.swapi.tech/api/';

  constructor(private http: HttpClient) {}

  getAllOfData(): Observable<any> {
    return this.http.get(this.dbUrl + '/films');
  }

  getActorsByFilms() {
    return null;
  }

  getPlanets(): Observable<any> {
    return this.http.get(this.dbUrl + '/planets');
  }

  getStarships() {
    return null
  }

}
