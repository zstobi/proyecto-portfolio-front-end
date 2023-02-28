import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMe } from 'src/app/models/aboutme';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { EditToastService } from 'src/app/services/edit-toast.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent {
  abtm: AboutMe = new AboutMe('');
  
  constructor(
    private abtmSvce: AboutmeService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private editToastSvce: EditToastService
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.abtmSvce.detail(id).subscribe(
      data => {
        this.abtm = data;
      }, err => {
        alert('updating failed');
        this.router.navigate(['']);
      }
    )
  }

  updateEd(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.abtmSvce.updateAbtm(id, this.abtm).subscribe({
      next: (data) => {
        this.editToastSvce.editToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },1500)
      },
      error: (err) => {
      alert('updating failed');
      this.router.navigate(['']);
      }
      });
  }
}
