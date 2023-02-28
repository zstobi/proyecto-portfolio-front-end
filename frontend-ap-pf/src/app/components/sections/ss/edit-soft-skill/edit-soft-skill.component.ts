import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkills } from 'src/app/models/softskills';
import { EditToastService } from 'src/app/services/edit-toast.service';
import { SoftskillsService } from 'src/app/services/softskills.service';

@Component({
  selector: 'app-edit-soft-skill',
  templateUrl: './edit-soft-skill.component.html',
  styleUrls: ['./edit-soft-skill.component.css']
})
export class EditSoftSkillComponent implements OnInit {
  ss: SoftSkills = new SoftSkills('');
  
  constructor(
    private ssSvce: SoftskillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private editToastSvce: EditToastService
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.ssSvce.detail(id).subscribe(
      data => {
        this.ss = data;
      }, err => {
        alert('updating failed');
        this.router.navigate(['']);
      }
    )
  }

  updateSS(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.ssSvce.updateSS(id, this.ss).subscribe({
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
