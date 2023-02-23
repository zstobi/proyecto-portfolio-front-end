import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Techs } from 'src/app/models/techs';
import { TechsService } from 'src/app/services/techs.service';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.css']
})
export class TechsComponent {
  
  ts:Techs[] = [];

  constructor(
    private router: Router,
    private tsSvce: TechsService
  ) {}

  getTechs():void{
    this.tsSvce.list().subscribe(data => {this.ts = data})
  }

  deleteTech(id?:number){
    if (id != undefined){
      this.tsSvce.deleteTech(id).subscribe({
        next: (data) => {
          this.getTechs();
          alert('succesfully deleted');
        },
        error: (err) => {
        alert('it failed');
        }
        });
    }
  }
  
  //rehacer esta funcion:
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
