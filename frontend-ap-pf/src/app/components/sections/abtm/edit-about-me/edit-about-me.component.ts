import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMe } from 'src/app/models/aboutme';
import { AboutmeService } from 'src/app/services/aboutme.service';

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
    private router: Router 
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