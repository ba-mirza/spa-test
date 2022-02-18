import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DbService } from 'src/app/db.service';
import { Film } from 'src/app/_models/film-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allFilms: Film[] = [];

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.dbService.getDataFilms().subscribe((data) => {
      this.allFilms = data.results;
      console.log(this.allFilms);
    });

    this.dbService.getPlanets().subscribe(data => console.log(data));
  }

}
