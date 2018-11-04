import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user: UserService) { }

  ngOnInit() {
  }
  loginUser(event) {
    var username = event.target.elements[0].value;
    var password = event.target.elements[1].value;
    if(username == 'admin' && password == 'admin') {
      this.router.navigate(['dashboard']);
      this.user.setUserLoggedIn();

    }

  }

}
