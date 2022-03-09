import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DbService } from 'src/app/db.service';
import { Film, Person, Planet, Starship } from 'src/app/_models/film-interface';
import { DialogOpenDetails } from './dialog-details/dialog-open-details';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent implements OnInit {

  pageFilms: any = [];

  displayedPlanets: string[] = ['name', 'climate',  'gravity', 'population', 'created'];
  displayedStarships: string[] = ['name', 'starship_class', 'passengers', 'length', 'created'];
  displayedCharacters: string[] = ['name', 'gender', 'height', 'mass', 'created'];

  dataCharacters: any;
  dataStarships: any;
  dataPlanets: any;

  characters: any;
  starships: any;
  planets: any;

  @Input()
  episode_id!: number

  // loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DbService,
    public matDialog: MatDialog,
    ) { }

  openDialog(body: any) {
    const dialogDetails = new MatDialogConfig();
    dialogDetails.data = body;
    const dialogRef = this.matDialog.open(DialogOpenDetails, dialogDetails);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`after closed: ${result}`)
    })

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.episode_id = params['id'];
      console.log(this.episode_id);
    });


    this.dbService.getDataById(this.episode_id).subscribe(nextData => {
      this.pageFilms = nextData;
      this.dataCharacters = nextData.characters.map((i: string) => {
        return this.dbService.getCharacters(i);
      })

      forkJoin(
        this.dataCharacters,
      ).subscribe(data => this.characters = data);

      this.dataStarships = nextData.starships.map((i: string) => {
        return this.dbService.getStarships(i);
      })

      forkJoin(
        this.dataStarships,
      ).subscribe(data => this.starships = data);

      this.dataPlanets = nextData.planets.map((i: string) => {
        return this.dbService.getPlanets(i);
      })

      forkJoin(
        this.dataPlanets,
      ).subscribe(data => this.planets = data);

    });

  }

}

