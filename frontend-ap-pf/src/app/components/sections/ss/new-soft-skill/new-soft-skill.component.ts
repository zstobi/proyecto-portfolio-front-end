import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkills } from 'src/app/models/softskills';
import { AddToastService } from 'src/app/services/add-toast.service';
import { SoftskillsService } from 'src/app/services/softskills.service';

@Component({
  selector: 'app-new-soft-skill',
  templateUrl: './new-soft-skill.component.html',
  styleUrls: ['./new-soft-skill.component.css']
})
export class NewSoftSkillComponent implements OnInit {
  ssTitle:string = '';
  
  constructor(
    private ssSvce: SoftskillsService,
    private router:Router,
    private addToastSvce: AddToastService
  ){}

  ngOnInit():void {

  }

  addSS(): void {
    const ss = new SoftSkills(this.ssTitle);
    this.ssSvce.saveSS(ss).subscribe(
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
