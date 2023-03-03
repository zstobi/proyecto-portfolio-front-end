import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutToastService } from 'src/app/services/logout-toast.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor (
    private router:Router,
    private logoutToastSvce: LogoutToastService
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
}
