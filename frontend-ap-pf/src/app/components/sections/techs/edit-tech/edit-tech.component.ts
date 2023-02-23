import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Techs } from 'src/app/models/techs';
import { TechsService } from 'src/app/services/techs.service';

@Component({
  selector: 'app-edit-tech',
  templateUrl: './edit-tech.component.html',
  styleUrls: ['./edit-tech.component.css']
})
export class EditTechComponent {
  ts: Techs = new Techs('', null);
  
  constructor(
    private tsSvce: TechsService,
    private activatedRouter: ActivatedRoute,
    private router: Router 
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.tsSvce.detail(id).subscribe(
      data => {
        this.ts = data;
      }, err => {
        alert('updating failed');
        this.router.navigate(['']);
      }
    )
  }

  updateTech(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.tsSvce.updateTech(id, this.ts).subscribe({
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
