import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private isAuthenticated = new BehaviorSubject<boolean>(false);
  
  //private isAuthenticated = new Subject<boolean>();

  constructor() { }

  setAuthentication(auth:boolean)
  {
    this.isAuthenticated.next(auth);// works as emitter
    console.log(this.isAuthenticated);
  }

  //observable can  only listened
  //behavioussubject and subject can listen and emit but only behavioussubject can be initialized with a value

  getAuthentication() : Observable<boolean>
  //BehaviorSubject<boolean>
  {
 // return this.isAuthenticated;
     return this.isAuthenticated as Observable<boolean>;
  }
}
