import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginFormService } from '../services/login-form.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanDeactivate<unknown> {
  constructor (
    private loginSvce: LoginFormService,
    private router: Router
  ) {}
  
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (this.router.getCurrentNavigation()) {
      //   return true;
      // } else {
      //     this.router.navigate(['']);
      // }  

    return false;
  }
  
}
