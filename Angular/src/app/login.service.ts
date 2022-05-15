import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080/employees";

  constructor(private httpClient:HttpClient) { }
  ValidateUser(username: any,password: any){
    if(username=="adevara" && password=="india123"){
     return true;
    }else{
      return false;
    }
  // makes an httpClient : returns userinfo or token 
  
  }

}
