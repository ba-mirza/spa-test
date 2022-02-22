import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(data: any) {
    localStorage.setItem('data', JSON.stringify(data));
  }

}
