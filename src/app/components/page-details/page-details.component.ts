import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  @Input()
  uid!: string | null

  public characters: any;
  public starships: any;
  public planets: any;

  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DbService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.uid = params['id'];
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
      this.characters = data[0];
      this.starships = data[1];
      // this.planets = data[2];
      // console.log(this.planets);
      this._methodFor(data[2]);
    });

    // this.dbService.getCharacters(this.characters).subscribe(next => console.log(next));


  }

  _methodFor(arg: Array<string>) {
    for(let links of arg) {
      this.dbService.getPlanets(links).subscribe(next => console.log(next));
    }
  }

}
