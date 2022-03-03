import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../mockData/employee";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiServerUrl+'/employee/all')
  }
  public addEmployees(employee:Employee):Observable<Employee> {
    return this.http.post<Employee>(this.apiServerUrl+'/employee/add', employee)
  }
  public editEmployees(employee:Employee):Observable<Employee> {
    return this.http.put<Employee>(this.apiServerUrl+'/employee/edit', employee)
  }
  public deleteEmployees(employeeId:number):Observable<void> {
    return this.http.delete<void>(this.apiServerUrl+'/employee/delete/${employeeId}')
  }

}
