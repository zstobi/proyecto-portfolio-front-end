import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
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
    private prjsSvce: ProjectsService
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
          alert('succesfully deleted');
        },
        error: (err) => {
        alert('it failed');
        }
        });
    }
  }
}
