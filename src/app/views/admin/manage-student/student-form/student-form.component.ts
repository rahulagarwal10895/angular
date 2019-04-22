import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student/student.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Student, AvailableDocuments } from 'src/app/shared/model/Student';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
availableDocuments:AvailableDocuments[];
text:string;
show:boolean;
  studentDetail: Student=new Student();
  
  
  categoryList;
  @Input() public formType: string;
  @Input() public set studentData(data: Student) {
    if (!!data) {
      this.studentDetail = data;
    }
  }
  @Input() public isReadOnly: boolean;
  constructor(private studentService:StudentService,
    private snack: SnackbarService,
    private route: Router

    ) { }

  ngOnInit() {
    this.studentService.getDocuments().subscribe(
      
        data=>{
          this.availableDocuments=data;
        }
      
    )
    
  }

  onRegister()
  {
    
    this.studentService.saveStudent(this.studentDetail);
   // this.snack.open('Student Registered Successfully', 'Dismiss', { duration: 30000 });
    this.snack.text="Student Registered Successfully";
    this.snack.show=true;
    this.route.navigate(['/home'])
    

  }

  OnUpdate()
  {
    this.studentService.updateStudent(this.studentDetail);
    this.snack.text="Student Updated Successfully";
    this.snack.show=true;

    this.route.navigate(['/home'])
  }
  



}
