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
  episode_id!: number

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


  constructor(private route: Router) {}

  openDetails(id: number) {
    this.route.navigate(['/details', id > 3 ? id - 3 : id + 3])
  }

  ngOnInit(): void {
  }

}
