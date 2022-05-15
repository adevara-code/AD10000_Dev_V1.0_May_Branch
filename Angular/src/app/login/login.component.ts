import { AuthenticationService } from '@/service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '@/registration.service';
import { User } from '@/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   #user= new User();
   #msg='';

 username = 'adevara';
 password = 'adevara@2021';
 invalidLogin: boolean = false;

  constructor(private router: Router, private _service:RegistrationService, private loginservice: AuthenticationService) { }
  ngOnInit(): void {
  }
  

  /*loginUser(){
    console.log("loginUser method calling")
    this._service.loginUserFromRemote(this.user).subscribe(
      (data:any) => {
        console.log("response received");
        this.router.navigate(['']);
      },
      (error:any)=> {
        console.log("exception occured");
        this.msg=" Unauthorized! Bad credentials The page is not available, Please check valid emailId and password";
      }
    )
    
  }

  userRegistration(){
    this.router.navigate(['/userRegistraion'])
  }

*/

 /* checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else{
      alert("please check your login details")
      this.invalidLogin = true
  }  */

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      //this.router.navigate([''])
      if(this.username=="adevara" && this.password=="india123"){
        this.invalidLogin = true;
      }else{
        this.invalidLogin = false
      }
      
    } else{
      alert("please check your login details")
      this.invalidLogin = true
  } 


  
}
}