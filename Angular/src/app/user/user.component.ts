import { User } from '@/models';
import { RegistrationService } from '@/registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router,private service:RegistrationService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers(){
    this.service.getUserList().subscribe(data=>{
      this.users=data;
    })
  }
}
