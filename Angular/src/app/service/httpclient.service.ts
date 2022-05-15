import { EmployeeDTO } from '@/EmployeeDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  getHeaders: any;

  constructor(private httpClient:HttpClient) { }

  
  getEmployees()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<EmployeeDTO[]>('http://localhost:8080/employees',{headers});
  }

  public deleteEmployee(employee: EmployeeDTO) {
    return this.httpClient.delete<EmployeeDTO>("http://localhost:8080/employees" + "/"+ employee.empId);
  }

  public createEmployee(employee: EmployeeDTO) {
    return this.httpClient.post<EmployeeDTO>("http://localhost:8080/employees", employee);
  }

}
