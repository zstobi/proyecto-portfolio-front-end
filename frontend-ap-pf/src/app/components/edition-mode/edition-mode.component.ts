import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edition-mode',
  templateUrl: './edition-mode.component.html',
  styleUrls: ['./edition-mode.component.css']
})
export class EditionModeComponent {
  constructor (
    private router: Router
  ) {
    console.log(this.router.url);
  }

}
