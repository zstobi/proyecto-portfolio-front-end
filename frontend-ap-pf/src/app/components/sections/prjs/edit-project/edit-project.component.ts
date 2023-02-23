import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  prjs: Projects = new Projects('','','');
  
  constructor(
    private prjsSvce: ProjectsService,
    private activatedRouter: ActivatedRoute,
    private router: Router 
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.prjsSvce.detail(id).subscribe(
      data => {
        this.prjs = data;
      }, err => {
        alert('updating failed');
        this.router.navigate(['']);
      }
    )
  }

  updatePrjs(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.prjsSvce.updatePrjs(id, this.prjs).subscribe({
      next: (data) => {
      alert('succesfully updated!');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('updating failed');
      this.router.navigate(['']);
      }
      });
  }
}
