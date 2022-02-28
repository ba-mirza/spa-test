import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
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

  getCharacters(url: any): Observable<any> {
    return this.http.get(url);
  }

  getStarships(url: any): Observable<any> {
    return this.http.get(url);
  }

  getPlanets(url: any): Observable<any> {
    return this.http.get(url);
  }


}
