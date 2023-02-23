import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Techs } from 'src/app/models/techs';
import { TechsService } from 'src/app/services/techs.service';

@Component({
  selector: 'app-new-tech',
  templateUrl: './new-tech.component.html',
  styleUrls: ['./new-tech.component.css']
})
export class NewTechComponent {
  tsTitle:string = '';
  percentage:number = null;
  
  constructor(
    private tsSvce: TechsService,
    private router:Router
  ){}

  ngOnInit():void {

  }

  addTech(): void {
    const ts = new Techs(this.tsTitle, this.percentage);
    this.tsSvce.saveTech(ts).subscribe(
      data=>{
        alert("tech succesfully added");
        this.router.navigate(['']);
      }, err=>{
        alert("failed");
        this.router.navigate(['']);
      }
    )
  }
}
