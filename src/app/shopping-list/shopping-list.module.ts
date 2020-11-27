import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AuthGuardService } from '../Shared/Auth/authGuard/auth-guard.service';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        MaterialModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path : 'shopping-list',
                component : ShoppingListComponent,
              canActivate: [AuthGuardService]//in case of interdenpendent we can not use comma seperator router Guard.they work asynchronously.
            }
        ])   ///it used for ng-IF ,ng-For
    ],
    exports:[
        RouterModule
    ],
    providers:[]
})
export class ShoppingListModule
{

}