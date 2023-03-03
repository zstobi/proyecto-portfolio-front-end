import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { ErrorToastService } from 'src/app/services/error-toast.service';
import { LoginErrorToastService } from 'src/app/services/login-error-toast.service';
import { LoginFormService } from 'src/app/services/login-form.service';
import { WelcomeToastService } from 'src/app/services/welcome-toast.service';

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
    private router: Router,
    private welToastSvce: WelcomeToastService,
    private errToastSvce: LoginErrorToastService
    ) {
      this.obligatedLogout();
    }

  login(form: NgForm) {
    // console.log('form value', form.value);

    this.loginSvce.login(this.creds)
      .subscribe(response => {
        this.welToastSvce.welcomeToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },1500)
      }, err=>{
        this.errToastSvce.errorToast();
        setTimeout(()=>{
          this.router.navigate(['']);
        },3000)
      })
  }

  obligatedLogout(){
    if (this.router.url != ''){
      localStorage.removeItem('token');
    }
  }
}