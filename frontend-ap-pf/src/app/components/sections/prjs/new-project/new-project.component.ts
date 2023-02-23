import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  prjsTitle:string = '';
  prjsContent:string = '';
  link:string = '';
  
  constructor(
    private prjsSvce: ProjectsService,
    private router:Router
  ){}

  ngOnInit():void {

  }

  addProject(): void {
    const prjs = new Projects(this.prjsTitle, this.prjsContent, this.link);
    this.prjsSvce.savePrjs(prjs).subscribe(
      data=>{
        alert("prj succesfully added");
        this.router.navigate(['']);
      }, err=>{
        alert("failed");
        this.router.navigate(['']);
      }
    )
  }
}
