import { Component } from '@angular/core';
import { StudentResponse, StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-sutdent-page',
  templateUrl: './sutdent-page.component.html',
  styleUrls: ['./sutdent-page.component.css']
})
export class SutdentPageComponent {

  students!: StudentResponse[];
  isLoading: boolean = false;
  constructor (private studentService:StudentService){

  }
  ngOnInit(){
    this.getStudentLists();
  }
  
  getStudentLists(){
    this.isLoading = true;
    this.studentService.getStudentsList().subscribe((res) =>{
    console.log(res);
    this.students = res.students;
    this.isLoading = false;
    });
  }

}
