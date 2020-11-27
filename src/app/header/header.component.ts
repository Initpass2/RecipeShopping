import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { AuthServiceService } from '../Shared/Auth/authService/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

private subscription :Subscription;

//2nd Process
  
//isAuthenticated$ : Observable<boolean>;
storeUserName:string;

  isAuthenticated = false;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
   this.getAuthentication();
   this.storeUserName=this.authService.username;
    //this.isAuthenticated$ = this.authService.getAuthentication();
  }

  

  loginAndLOgout() {

    this.authService.setAuthentication(!this.isAuthenticated);
  }


  getAuthentication() {
   this.subscription=
    this.authService.getAuthentication().subscribe((data)=>{
      this.isAuthenticated=data;
    });
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  
}
