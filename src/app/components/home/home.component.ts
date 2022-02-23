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
  actors: any;
  planets: any;

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.dbService.getAllOfData().subscribe(data => {
      this.allFilms = data.result;
      // console.log(this.allFilms);
    });



  }

}
