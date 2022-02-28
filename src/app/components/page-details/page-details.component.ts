import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { DbService } from 'src/app/db.service';
import { Person, Planet, Starship } from 'src/app/_models/film-interface';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  planets: string[] = ['name', 'climate',  'gravity', 'population', 'created'];
  starships: string[] = ['name', 'starship_class', 'passengers', 'length', 'created'];
  characters: string[] = ['name', 'gender', 'height', 'mass', 'created'];

  dataPlanets: any;

  @Input()
  uid!: string | null

  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DbService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.uid = params['id'];
      console.log(this.uid);
    });

    this.loading = true;

    this.dbService.getAllOfData(this.uid).pipe(
      map((obj: any) => {
        let characters = obj.result.properties.characters;
        let starships = obj.result.properties.starships;
        let planets = obj.result.properties.planets;
        return [characters, starships, planets];
      })
    ).subscribe(data => {
      this.loading = false;
      // this.characters = data[0];
      // this.starships = data[1];
      this._methodFor(data[2]);
    });

  }

  _methodFor(arg: Array<string>) {
    arg.forEach((url: string) => {
      this.dbService.getPlanets(url).subscribe(nextPlanets => {
        this.dataPlanets = nextPlanets.result;
        console.log(this.dataPlanets);
      })
    })
  }

}
