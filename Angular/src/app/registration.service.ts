import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseURL = "http://localhost:8080/getAllUsers";
  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
  return this._http.post<any>("http://localhost:8080/login",user)}
  
  public registrUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/register",user);
  }

  public getAllUsersFromRemote(user:User):Observable<any>{
    return this._http.get<any>("http://localhost:8080/getAllUsers");
  }

  getUserList(): Observable<User[]>{
    return this._http.get<User[]>(`${this.baseURL}`);
  }

  }

