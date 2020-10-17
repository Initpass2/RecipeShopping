import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanActivateChild } from '@angular/router';
import { Observable, observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { AuthServiceService } from '../authService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild {

  constructor(private authService : AuthServiceService,private router :Router) { }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
   {
    return this.authService.getAuthentication().pipe(map(data=> {

      if(!data)
      {
        this.router.navigate(['/access-denied']);
      }
      else{
        return true;
      }
    }));
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
  return this.canActivate(childRoute,state);
  }
}
