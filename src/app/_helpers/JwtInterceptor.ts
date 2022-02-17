import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DbService } from '../db.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: DbService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let currentUser = this.authService.currentUserValue;
    if(currentUser && currentUser.token) {
      req = req.clone({
        Authorization: `Bearer ${currentUser}`
      })
    }

    return next.handle(req);
  }
}
