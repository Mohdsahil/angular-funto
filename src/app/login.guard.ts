import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private config: ConfigService,
   ) {} 
   auth:any = this.config.isAuthenticated();

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(this.auth.token) {
        this.router.navigate(['/dashboard']);
        return false;
      } else {
        return true;
      }
    return true;
  }
  
}
