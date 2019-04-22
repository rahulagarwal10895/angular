import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-commonpanel',
  templateUrl: './commonpanel.component.html',
  styleUrls: ['./commonpanel.component.css']
})
export class CommonpanelComponent implements OnInit {

  selected:string;

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    
    
    
  }

}
