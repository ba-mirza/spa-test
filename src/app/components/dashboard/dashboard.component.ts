import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input()
  episodeId?: number

  @Input()
  title!: string

  @Input()
  description!: string

  @Input()
  producer!: string

  @Input()
  created!: number

  @Input()
  url?: string

  @Input()
  uid!: string

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private route: Router) {}

  openDetails() {
    this.route.navigate(['/details', this.uid])
  }

  ngOnInit(): void {
  }

}
