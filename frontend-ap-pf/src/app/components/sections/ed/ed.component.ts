import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-ed',
  templateUrl: './ed.component.html',
  styleUrls: ['./ed.component.css']
})
export class EdComponent implements OnInit {
  ed:Education[] = [];

  constructor(
    private router: Router,
    private edSvce: EducationService
  ) {}

  ngOnInit(){
    this.getEducation();
    this.editMode();
  }

  editMode(){
    if (localStorage.getItem('token') == null){
      return false;
    } else {
      return true;
    }
  }

  getEducation():void{
    this.edSvce.list().subscribe(data => {this.ed = data})
  }

  deleteEd(id?:number){
    if (id != undefined){
      this.edSvce.deleteEd(id).subscribe({
        next: (data) => {
          this.getEducation();
          alert('succesfully deleted');
        },
        error: (err) => {
        alert('it failed');
        }
        });
    }
  }
}
