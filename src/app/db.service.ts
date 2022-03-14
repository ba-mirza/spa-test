import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Person, Planet, Starship } from './_models/film-interface';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getAllOfData(): Observable<any> {
    return this.http.get(this.dbUrl + `/films/`);
  }

  getDataById(id?: any): Observable<any> {
    return this.http.get(this.dbUrl + `/films/${id}`);
  }

  getDataByUrls(url: any): Observable<any> {
    return this.http.get(url);
  }

  getCharacters(url: any): Observable<Person[]> {
    return this.http.get<Person[]>(url);
  }

  getStarships(url: any): Observable<Starship[]> {
    return this.http.get<Starship[]>(url);
  }

  getPlanets(url: any): Observable<Planet[]> {
    return this.http.get<Planet[]>(url);
  }


}
