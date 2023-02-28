import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EditToastService } from 'src/app/services/edit-toast.service';
import { EducationService } from 'src/app/services/education.service';
import { ErrorToastService } from 'src/app/services/error-toast.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  ed: Education = new Education('','');
  
  constructor(
    private edSvce: EducationService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private editToastSvce: EditToastService,
    private errToastSvce: ErrorToastService
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.edSvce.detail(id).subscribe(
      data => {
        this.ed = data;
      }, err => {
        this.errToastSvce.errorToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },2000)
      }
    )
  }

  updateEd(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.edSvce.updateEd(id, this.ed).subscribe({
      next: (data) => {
        this.editToastSvce.editToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },1500)
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
