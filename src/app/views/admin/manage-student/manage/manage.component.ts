import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student/student.service';
import { Student } from 'src/app/shared/model/Student';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  studentData:Student;
  showViewComponent=false;
  showEditComponent=false;
  showDeleteComponent=false;

  showManageComponent=true;


  students:Student[];
  constructor(private studentService:StudentService) { }

  ngOnInit() {
   
    this.students=this.studentService.getStudents();
    
  }

  onView(student:Student)
  {
    this.studentData=student;
    this.showEditComponent=false;
    this.showManageComponent=false;
    this.showDeleteComponent=false;
    this.showViewComponent=true;
  }

  onEdit(student:Student)
  {
    this.studentData=student;
    this.showEditComponent=true;
    this.showManageComponent=false;
    this.showDeleteComponent=false;
    this.showViewComponent=false;
  }

  OnDelete()
  {
    debugger;
    this.studentData;
    this.studentService.deleteStudent(this.studentData.id);
    this.showDeleteComponent=false;
    this.students= this.studentService.getStudents();
    // this.students=this.students.filter(i=>i.email!==this.studentData.email)

  }

  onDeleteIcon(student:Student)
  {
    this.studentData=student;
    this.showDeleteComponent=true;
  }


  close()
  {
    this.showDeleteComponent=false;

  }

  searchuser(value)
  {
    let data=this.studentService.getStudents();
    this.students = value.length>0?data.filter(function (student:Student){return (student.studentName.toLocaleLowerCase().indexOf(value.toLocaleLowerCase())!=-1)}):data;
  }
  onSelectCategory(value)
  {
    if(value==="ALL")
    this.students=this.studentService.getStudents();
    else{
    let data=this.studentService.getStudents();
    this.students = value.length>0?data.filter(function (student:Student){return (student.category===value)}):data;
    }
  }


}
