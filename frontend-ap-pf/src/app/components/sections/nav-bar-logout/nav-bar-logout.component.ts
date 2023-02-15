import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-logout',
  templateUrl: './nav-bar-logout.component.html',
  styleUrls: ['./nav-bar-logout.component.css']
})
export class NavBarLogoutComponent {
  constructor (private router:Router) {}

  ngOnInit():void {}

  logout(){
    this.router.navigate(['']);
  }
}
