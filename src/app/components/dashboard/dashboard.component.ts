import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input()
  episodeId!: string

  @Input()
  title!: string

  @Input()
  description!: string

  @Input()
  producer!: string

  @Input()
  created!: number

  @Input()
  url!: string

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() {}


  ngOnInit(): void {
  }

}
