import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService
    ) { }

  canActivate() {

    if(this.auth.login()) {
      return true
    }
    alert('Not logged! ERROR!!!');
    this.router.navigate(['']);
    return false;
  }
}
