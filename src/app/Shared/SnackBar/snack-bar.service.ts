import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar, private router: Router) { }


  
  openSnackBar(message: string, action = { message: null, redirectUrl: null }, ) {
    const snackBarRef = this.snackBar.open(message, action.message, {
      duration: 10000,
    });
    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(action.redirectUrl);
    });
  }
}
