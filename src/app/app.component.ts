import { Component } from '@angular/core';
import { SnackbarService } from './shared/services/snackbar/snackbar.service';
import { LoginService } from './shared/services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'app';

  constructor(public snack:SnackbarService,public loginService:LoginService){

  }


}
