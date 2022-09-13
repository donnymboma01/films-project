import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username : string, password : string){
    if(username === 'donny_dsm' && password === 'donny' ){
      return 200;
    }else{
      return 403;
    }
  }
}
