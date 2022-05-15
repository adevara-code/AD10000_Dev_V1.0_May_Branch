import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CactivateGuard } from './cactivate.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserRegistraionComponent } from './user-registraion/user-registraion.component';
import { UserComponent } from './user/user.component';

/*const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'userRegistraion', component: UserRegistraionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'view-employees', component: EmployeeListComponent,canActivate:[AuthGaurdService] },
  { path: 'create-employee', component: CreateEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate:[AuthGaurdService]},
  { path: 'update-employee/:id', component: UpdateEmployeeComponent,canActivate:[AuthGaurdService]}
]; */

// this is working one 
const routes: Routes = [
  { path: '', component: EmployeeListComponent, canActivate:[AuthGaurdService]},
  { path: 'employees', component: EmployeeListComponent,canActivate:[AuthGaurdService] },
  { path: 'create-employee', component: CreateEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'users', component: UserComponent,canActivate:[AuthGaurdService]},
  { path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate:[AuthGaurdService]},
  { path: 'update-employee/:id', component: UpdateEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] }
];  


/*
const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent,canActivate:[AuthGaurdService]},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] }
  ];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
