import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface StudentResponse {
  id:number
  name:string,
  course:string,
  email:string,
  phone:string,
  created_at:string,
  updated_at:string
}

export interface StudentResponseType {
 status:Number,
 students:StudentResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudentsList() {
   return this.httpClient.get<StudentResponseType>(`api/students`);
  }

  constructor(private httpClient:HttpClient) { }

  saveStudent(inputData:object){
       return this.httpClient.post(`api/students`,inputData);
  }
}
