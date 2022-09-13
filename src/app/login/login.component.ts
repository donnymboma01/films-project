import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string = "";
  password : string = "";
  errorMsg = ''

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    if(this.username.trim().length === 0){
      this.errorMsg = "username is required !";
    }else if(this.password.trim().length === 0){
      this.errorMsg = 'password is required !';
    }else{
      this.errorMsg = "";
    }
  }
}
