import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prjs',
  templateUrl: './prjs.component.html',
  styleUrls: ['./prjs.component.css']
})
export class PrjsComponent {
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
