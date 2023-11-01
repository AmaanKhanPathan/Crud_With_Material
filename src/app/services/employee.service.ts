import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  constructor(private _http : HttpClient) { }

  ngOnInit(): void {
    
  }

  //post call
  addEmployee(data:any):Observable<any>{
    return this._http.post<any>('http://localhost:3000/comments', data);
  }

  //get call
  getEmployee():Observable<any>{
    return this._http.get<any>('http://localhost:3000/comments');
  }

  //delete call
  deleteEmployee(id:number){
    return this._http.delete(`http://localhost:3000/comments/${id}`)
  }

  //update call
  updateEmployee(id:number, data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/comments/${id}`, data)

  }
}
