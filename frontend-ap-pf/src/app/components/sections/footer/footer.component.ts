import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  constructor(){}

  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
