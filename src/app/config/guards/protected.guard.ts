import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../../core/services/users.service';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router){}

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token: any = sessionStorage.getItem('token');
      if (token&&token!==null) {
        return true;
      }
      else {
        this.router.navigateByUrl('');
        return false;
      }
 }
 
}