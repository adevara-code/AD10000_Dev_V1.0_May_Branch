import { EmployeeDTO } from '@/EmployeeDTO';
import { HttpClientService } from '@/service/httpclient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: EmployeeDTO[] = [];
  
  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      (     response: any) =>this.handleSuccessfulResponse(response),
    );
 }

handleSuccessfulResponse(response: EmployeeDTO[])
{
   this.employees=response;
}

deleteEmployee(employee: EmployeeDTO): void {
  this.httpClientService.deleteEmployee(employee)
    .subscribe( (data: any) => {
     this.employees = this.employees.filter(u => u !== employee);
  })
};


}
