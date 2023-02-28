import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkills } from 'src/app/models/softskills';
import { DeleteToastService } from 'src/app/services/delete-toast.service';
import { ErrorToastService } from 'src/app/services/error-toast.service';
import { SoftskillsService } from 'src/app/services/softskills.service';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.css']
})
export class SsComponent implements OnInit {
  ss:SoftSkills[] = [];

  constructor(
    private router: Router,
    private ssSvce: SoftskillsService,
    private delToastSvce: DeleteToastService,
    private errToastSvce: ErrorToastService
  ) {}

  ngOnInit(){
    this.getSS();
    this.editMode();
  }

  editMode(){
    if (localStorage.getItem('token') == null){
      return false;
    } else {
      return true;
    }
  }

  getSS():void{
    this.ssSvce.list().subscribe(data => {this.ss = data})
  }

  deleteSS(id?:number){
    if (id != undefined){
      this.ssSvce.deleteSS(id).subscribe({
        next: (data) => {
          this.getSS();
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
