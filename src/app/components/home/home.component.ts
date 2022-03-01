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

    this.dbService.getAllOfData().pipe(
      map((item) => {
        let sortedItems = item.results;
        sortedItems.sort((a: any, b: any): any => a.episode_id < b.episode_id ? -1 : 1)
        return sortedItems;
      })
    ).subscribe(nextData => {
      this.allFilms = nextData;
    });


  }

}
