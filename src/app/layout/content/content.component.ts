import { Component, OnInit } from '@angular/core';
import {Employee} from "../../mockData/employee";
import { EmployeeService } from "../../services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{



  ngOnInit(): void {
  }


}
