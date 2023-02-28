import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { AddToastService } from 'src/app/services/add-toast.service';
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
    private router:Router,
    private addToastSvce: AddToastService
  ){}

  ngOnInit():void {

  }

  addEducation(): void {
    const ed = new Education(this.edTitle, this.edContent);
    this.edSvce.saveEd(ed).subscribe(
      data=>{
        this.addToastSvce.addToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },1500)
      }, err=>{
        alert("failed");
        this.router.navigate(['']);
      }
    )
  }
}
