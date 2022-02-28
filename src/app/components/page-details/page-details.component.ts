import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { DbService } from 'src/app/db.service';
import { Film, Person, Planet, Starship } from 'src/app/_models/film-interface';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  pageFilms: Film[] = [];

  displayedPlanets: string[] = ['name', 'climate',  'gravity', 'population', 'created'];
  displayedStarships: string[] = ['name', 'starship_class', 'passengers', 'length', 'created'];
  displayedCharacters: string[] = ['name', 'gender', 'height', 'mass', 'created'];

  dataCharacters: any;
  dataStarships: any;
  dataPlanets: any;

  @Input()
  id!: number

  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DbService,
    public matDialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.dbService.getAllOfData().subscribe(nextData => {
      this.pageFilms = nextData.results;
      console.log(this.pageFilms);
    })

    // this.loading = true;

    this.dbService.getDataById(this.id).subscribe(nextData => {
      // console.log(nextData);
    })

  }

  openDialog() {
    this.matDialog.open(DialogOpenDetails)
  }



}

@Component({
  selector: 'dialog-open-details',
  template: `
  <h1 mat-dialog-title>Dialog with elements</h1>
  <div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close>Close</button>
  </div>`
})

export class DialogOpenDetails {
  constructor() {}
}
