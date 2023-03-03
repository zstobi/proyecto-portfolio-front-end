import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/models/aboutme';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { DeleteToastService } from 'src/app/services/delete-toast.service';
import { ErrorToastService } from 'src/app/services/error-toast.service';

@Component({
  selector: 'app-abtm',
  templateUrl: './abtm.component.html',
  styleUrls: ['./abtm.component.css']
})
export class AbtmComponent {
  abtm: AboutMe[]=[];
  liveToast:HTMLDivElement;

  constructor(
    private router: Router,
    private abtmSvce: AboutmeService,
    private delToastSvce: DeleteToastService,
    private errToastSvce: ErrorToastService
  ) {}

  ngOnInit(){
    this.getAboutMe();
    this.editMode();
  }

  editMode(){
    if (localStorage.getItem('token') == null){
      return false;
    } else {
      return true;
    }
  }

  getAboutMe():void{
    this.abtmSvce.list().subscribe(data => {this.abtm = data})
  }

  deleteAbtm(id?:number){
    if (id != undefined){
      this.abtmSvce.deleteAbtm(id).subscribe({
        next: (data) => {
          this.getAboutMe();
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
