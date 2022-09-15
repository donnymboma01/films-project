import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  login(username : string, password : string){
    if(username === 'donny_dsm' && password === 'donny' ){
      return 200;
    }else{
      return 403; 
    }
  }

  logout(){

  }
}
