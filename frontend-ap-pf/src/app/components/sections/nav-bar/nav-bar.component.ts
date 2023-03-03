import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinksToastService } from 'src/app/services/links-toast.service';
import { LogoutToastService } from 'src/app/services/logout-toast.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor (
    private router:Router,
    private logoutToastSvce: LogoutToastService,
    private linksSvce: LinksToastService
    ) {}

  ngOnInit():void {}

  getToken() {
    return localStorage.getItem('token');
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.router.navigate(['']);
    this.logoutToastSvce.logoutToast();
    localStorage.removeItem('token');
  }

  links(){
    this.linksSvce.linksToast();
  }
}
