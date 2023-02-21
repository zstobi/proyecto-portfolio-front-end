import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-ed',
  templateUrl: './ed.component.html',
  styleUrls: ['./ed.component.css']
})
export class EdComponent {
  ed:Education[] = [];

  constructor(
    private router: Router,
    private edSvce: EducationService
    // aca agregaria el servicio del token pero vamos viendo como progresa
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
    this.edSvce.list().subscribe(data => {this.ed = data});
  }

}
