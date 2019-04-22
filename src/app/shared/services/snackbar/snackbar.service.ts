import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {


  text:string;
  show:boolean=false;
  constructor() { }


}

