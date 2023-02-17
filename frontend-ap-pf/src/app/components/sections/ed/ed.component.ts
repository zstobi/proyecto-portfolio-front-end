import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ed',
  templateUrl: './ed.component.html',
  styleUrls: ['./ed.component.css']
})
export class EdComponent {
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
