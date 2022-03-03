import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard  {
  constructor(
    private router: Router,
    private auth: AuthService
    ) { }

  // canActivate() {
  //   alert('Not logged! ERROR!!!');
  // }
}
