import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { DeleteToastService } from 'src/app/services/delete-toast.service';
import { ErrorToastService } from 'src/app/services/error-toast.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-prjs',
  templateUrl: './prjs.component.html',
  styleUrls: ['./prjs.component.css']
})
export class PrjsComponent {
  prjs:Projects[] = [];


  constructor(
    private router: Router,
    private prjsSvce: ProjectsService,
    private delToastSvce: DeleteToastService,
    private errToastSvce: ErrorToastService
  ) {}

  ngOnInit(){
    this.getProjects();
    this.editMode();
  }

  editMode(){
    if (localStorage.getItem('token') == null){
      return false;
    } else {
      return true;
    }
  }

  getProjects():void{
    this.prjsSvce.list().subscribe(data => {this.prjs = data})
  }

  deletePrjs(id?:number){
    if (id != undefined){
      this.prjsSvce.deletePrjs(id).subscribe({
        next: (data) => {
          this.getProjects();
          this.delToastSvce.deleteToast();
        },
        error: (err) => {
          this.errToastSvce.errorToast();
          setTimeout(()=>{
            this.router.navigate(['']);
          },2000)
        }
        });
    }
  }
}
