import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/Login';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  login:Login=new Login();
  constructor(private loginService:LoginService,
    private route: Router
    ) { }

  ngOnInit() {
  }

  onLogin()
  {
    if(this.loginService.login(this.login))
    this.route.navigate(['/home']);


  }

  onReset()
  {

  }

}
