import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abtm',
  templateUrl: './abtm.component.html',
  styleUrls: ['./abtm.component.css']
})
export class AbtmComponent {
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
