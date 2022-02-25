import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbUrl = 'https://www.swapi.tech/api/';

  constructor(private http: HttpClient) {}

  getAllOfData(id?: any): Observable<any> {
    return this.http.get(this.dbUrl + `/films/${id}`);
  }

  // getChooseData(people: any, starships: any, planets: any): Observable<any> {
  //   return this.http.get(people);
  //   return this.http.get(starships);
  //   return this.http.get(people);
  // }

  getCharacters(url: string): Observable<any> {
    return this.http.get(url);
  }

  getStarships(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPlanets(url: string): Observable<any> {
    return this.http.get(url);
  }


}
