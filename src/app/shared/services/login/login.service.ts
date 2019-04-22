import { Injectable } from '@angular/core';
import { Login } from '../../model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  showpanel = false;
  constructor() { }

  public login(data: Login): boolean {
    debugger;
    if (data.username === 'admin' && data.password === 'admin') {
      this.showpanel = true;
      return true;
    }

    else {
      this.showpanel = false;
      return false;
    }
  }
}
