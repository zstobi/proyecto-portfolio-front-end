import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { AddToastService } from 'src/app/services/add-toast.service';
import { ErrorToastService } from 'src/app/services/error-toast.service';
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
    private router:Router,
    private addToastSvce: AddToastService,
    private errToastSvce: ErrorToastService
  ){}

  ngOnInit():void {

  }

  addProject(): void {
    const prjs = new Projects(this.prjsTitle, this.prjsContent, this.link);
    this.prjsSvce.savePrjs(prjs).subscribe(
      data=>{
        this.addToastSvce.addToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },1500)
      }, err=>{
        this.errToastSvce.errorToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },2000)
      }
    )
  }
}
