import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FBAuthResponse } from 'src/environments/interface';
import { User } from './_models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

  constructor(private http: HttpClient) { }

  get token(): any {
    const dateNow = new Date();
    const expDate = localStorage.getItem('fb-token-exp')!;
    if(dateNow.toString() > expDate) {
      this.logout();
      return null
    }
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: FBAuthResponse | any | null) {
    if(response) {
      const exp = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', exp.toString());
    } else {
      localStorage.clear();
    }
  }

}
