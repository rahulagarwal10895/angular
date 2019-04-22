import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() public studentData;

  readonly=true;
  constructor() { }

  ngOnInit() {
  }

}
