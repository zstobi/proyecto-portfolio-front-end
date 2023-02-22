import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/models/aboutme';
import { AboutmeService } from 'src/app/services/aboutme.service';

@Component({
  selector: 'app-abtm',
  templateUrl: './abtm.component.html',
  styleUrls: ['./abtm.component.css']
})
export class AbtmComponent {
  abtm: AboutMe[]=[];

  constructor(
    private router: Router,
    private abtmSvce: AboutmeService
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
          alert('succesfully deleted');
        },
        error: (err) => {
        alert('it failed');
        }
        });
    }
  }
}
