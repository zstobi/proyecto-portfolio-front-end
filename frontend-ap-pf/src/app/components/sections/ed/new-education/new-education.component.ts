import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  edTitle:string = '';
  edContent:string = '';
  
  constructor(
    private edSvce: EducationService,
    private router:Router
  ){}

  ngOnInit():void {

  }

  addEducation(): void {
    const ed = new Education(this.edTitle, this.edContent);
    this.edSvce.saveEd(ed).subscribe(
      data=>{
        alert("ed succesfully added");
        this.router.navigate(['']);
      }, err=>{
        alert("failed");
        this.router.navigate(['']);
      }
    )
  }
}
