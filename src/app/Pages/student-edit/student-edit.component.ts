import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  student!:any;
  studentId!:any;
  errors : any=[];
  loadingTitle: string = 'Loading';
  isLoading:boolean = false;

  constructor(private route:ActivatedRoute){
  }
  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');
    
  }
  updateStudent(){

  }
}
