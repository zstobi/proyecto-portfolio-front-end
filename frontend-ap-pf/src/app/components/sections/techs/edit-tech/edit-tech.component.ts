import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Techs } from 'src/app/models/techs';
import { EditToastService } from 'src/app/services/edit-toast.service';
import { ErrorToastService } from 'src/app/services/error-toast.service';
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
    private router: Router,
    private editToastSvce: EditToastService,
    private errToastSvce: ErrorToastService
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.tsSvce.detail(id).subscribe(
      data => {
        this.ts = data;
      }, err => {
        this.errToastSvce.errorToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },2000)
      }
    )
  }

  updateTech(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.tsSvce.updateTech(id, this.ts).subscribe({
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
        },5000)
      }
      });
  }
}
