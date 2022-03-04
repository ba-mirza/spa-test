import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { DbService } from 'src/app/db.service';
import { Film } from 'src/app/_models/film-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading: boolean = false;

  allFilms: Film[] = [];

  constructor(
    private dbService: DbService,
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private route: Router,
    ) { }

  ngOnInit(): void {

    // if(this.auth.login()) {
    //   this._snackBar.openFromComponent(PizzaPartyComponent, {
    //     duration: 2000
    //   })
    // }

    this.dbService.getAllOfData().pipe(
      map((item) => {
        let sortedItems = item.results;
        sortedItems.sort((a: any, b: any): any => a.episode_id < b.episode_id ? -1 : 1)
        return sortedItems;
      })
    ).subscribe(nextData => {
      this.loading = false;
      this.allFilms = nextData;
    });

    this.loading = true;
  }


  logOut() {
    this.auth.logout();
    this.route.navigate(['']);
  }

}


@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
    <span class="example-pizza-party">
      🍕Succesfully!
    </span>

  `,
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class PizzaPartyComponent {}
