import { EmployeeDTO } from '@/EmployeeDTO';
import { Component, OnInit } from '@angular/core';
import { HttpClientService} from '../service/httpclient.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: EmployeeDTO = new EmployeeDTO("","","","");
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( (data: any) => {
          alert("Employee created successfully.");
        });

  };

}
