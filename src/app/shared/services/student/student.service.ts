import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student, AvailableDocuments } from '../../model/Student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private students:Student[]=new Array();
  getStudentsData()
  {
    debugger;
    this.students;
    return this.students;
  }

  setStudentData(data)
  {
    this.students=data;
  }
  constructor(private http: HttpClient) { }


  public getStudents(){
    this.students=[];
    //return this.http.get<Student[]>("./assets/students.json");
    for(let i=0;i<localStorage.length;i++)
    {
      
      this.students.push(JSON.parse(localStorage.getItem(i.toString())))
      this.students[i].id=i;
    }
    return this.students;
  }

  public saveStudent(data:Student){
    // debugger;
    // this.students.push(data);
    // this.students;
    localStorage.setItem(localStorage.length.toString(),JSON.stringify(data));
  }

  public deleteStudent(id:number){
    localStorage.removeItem(id.toString());
  }

  public updateStudent(data:Student){
    // debugger;
    // this.students.push(data);
    // this.students;
    localStorage.setItem(data.id.toString(),JSON.stringify(data));
  }


  public getDocuments()
  {
      return this.http.get<AvailableDocuments[]>("./assets/documents.json");

  }

}
