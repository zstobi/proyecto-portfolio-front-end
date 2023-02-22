import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/models/aboutme';
import { AboutmeService } from 'src/app/services/aboutme.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent {
  abtmContent:string = '';
  
  constructor(
    private abtmSvce: AboutmeService,
    private router:Router
  ){}

  ngOnInit():void {

  }

  addAboutMe(): void {
    const abtm = new AboutMe(this.abtmContent);
    this.abtmSvce.saveAbtm(abtm).subscribe(
      data=>{
        alert("succesfully added");
        this.router.navigate(['']);
      }, err=>{
        alert("failed");
        this.router.navigate(['']);
      }
    )
  }
}
