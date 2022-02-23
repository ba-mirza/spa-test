import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  @Input()
  uid!: string | null

  links: any = null;
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DbService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.uid = params['id'];
      console.log(this.uid)
    });

    this.loading = true;

    this.dbService.getAllOfData().pipe(
      map(data => {
       let results = null;
       data.result?.forEach((item: any) => {
         if(item.uid === this.uid){
           results = item.properties.characters
         }
       });
       return results;
      })
    ).subscribe(data => {
      this.loading = false
      this.links = data;
    });

  }
}
