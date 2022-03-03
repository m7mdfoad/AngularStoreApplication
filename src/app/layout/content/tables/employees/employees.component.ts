import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../../mockData/employee";
import {EmployeeService} from "../../../../services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:Employee[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees():void {
    this.employeeService.getAllEmployees().subscribe(
      (response:Employee[])=>{
        this.employees = response;
      }, (error:HttpErrorResponse)=>{
        alert(error.message)
      });
  }
}
