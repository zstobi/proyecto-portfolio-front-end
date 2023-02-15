import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { LoginFormService } from 'src/app/services/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  creds: Credentials = {
    user: '',
    password: ''
  };

  constructor (
    private loginSvce: LoginFormService,
    private router: Router
    ) {}

  login(form: NgForm) {
    console.log('form value', form.value);

    this.loginSvce.login(this.creds)
      .subscribe(response => {
        this.router.navigate(['editionMode']);
      })
  }
}