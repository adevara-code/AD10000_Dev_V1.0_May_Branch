import { User } from '@/models';
import { RegistrationService } from '@/registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registraion',
  templateUrl: './user-registraion.component.html',
  styleUrls: ['./user-registraion.component.css']
})
export class UserRegistraionComponent implements OnInit {
  user= new User();
  msg='';

  
  constructor(private _service : RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }


  registerUser(){
    console.log("registerUser method calling");
    this._service.registrUserFromRemote(this.user).subscribe(
      (data:any) => {
        console.log("response received");
        this._router.navigate(['/login']);
       // this.router.navigate(['/loginsuccess'])
      },
      (error:any)=> {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }
}