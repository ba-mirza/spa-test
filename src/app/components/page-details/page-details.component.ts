import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DbService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(`Params: ${params}`)
    });

    this.dbService.getAllOfData().pipe(
      map(items => {
        let array = [];
        const newItems = items.result.properties;
        for(let key of newItems) {
          array.push(newItems[key])
        }
        return array
      })
    ).subscribe(x => console.log(x));

  }
}
