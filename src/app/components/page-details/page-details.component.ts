import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from 'src/app/db.service';
import { Film, Person, Planet, Starship } from 'src/app/_models/film-interface';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  pageFilms: any = [];

  displayedPlanets: string[] = ['name', 'climate',  'gravity', 'population', 'created'];
  displayedStarships: string[] = ['name', 'starship_class', 'passengers', 'length', 'created'];
  displayedCharacters: string[] = ['name', 'gender', 'height', 'mass', 'created'];

  dataCharacters: any;
  dataStarships: any;
  dataPlanets: any;

  @Input()
  episode_id!: number

  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DbService,
    public matDialog: MatDialog
    ) { }

  openDialog() {
    this.matDialog.open(DialogOpenDetails)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.episode_id = params['id'];
      console.log(this.episode_id);
    });

    // this.loading = true;

    this.dbService.getDataById(this.episode_id).subscribe(nextData => {
      this.pageFilms = nextData;
      let PERSONS: any = [];
      nextData.characters.forEach((url: string) => {

        this.dbService.getCharacters(url).subscribe(nextCharacters => {
          PERSONS.push(nextCharacters);
        })
      });
      this.dataCharacters = PERSONS;
      console.log(this.dataCharacters);
    });


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
