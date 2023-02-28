import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/models/aboutme';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { AddToastService } from 'src/app/services/add-toast.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent {
  abtmContent:string = '';
  
  constructor(
    private abtmSvce: AboutmeService,
    private router:Router,
    private addToastSvce: AddToastService
  ){}

  ngOnInit():void {

  }

  addAboutMe(): void {
    const abtm = new AboutMe(this.abtmContent);
    this.abtmSvce.saveAbtm(abtm).subscribe(
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
