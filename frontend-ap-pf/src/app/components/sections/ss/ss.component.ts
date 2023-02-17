import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.css']
})
export class SsComponent {
  constructor(
    private router: Router
  ) {}

  ngOnInit(){
    this.editMode();
  }

  editMode(){
    if (localStorage.getItem('token') == null){
      return false;
    } else {
      return true;
    }
  }
}
