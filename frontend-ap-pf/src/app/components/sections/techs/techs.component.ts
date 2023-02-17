import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.css']
})
export class TechsComponent {
  constructor(
    private router: Router
  ) {}

  ngOnInit(){
    this.editMode();
  }

  //rehacer esta funcion

  responsive(){
    if (window.screen.width <= 400){
      return true;
    } else {
      return false;
    }
  }

  editMode(){
    if (localStorage.getItem('token') == null){
      return false;
    } else {
      return true;
    }
  }
}
