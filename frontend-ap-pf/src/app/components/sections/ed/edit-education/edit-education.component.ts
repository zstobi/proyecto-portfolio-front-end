import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  ed: Education = null;
  
  constructor(
    private edSvce: EducationService,
    private activatedRouter: ActivatedRoute,
    private router: Router 
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.edSvce.detail(id).subscribe(
      data => {
        this.ed = data;
      }, err => {
        alert('updating failed');
        this.router.navigate(['']);
      }
    )
  }

  updateEd(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.edSvce.updateEd(id, this.ed).subscribe({
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
