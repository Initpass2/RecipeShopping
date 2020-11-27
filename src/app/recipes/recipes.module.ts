import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { StartrecipeComponent } from './startrecipe/startrecipe.component';

 @NgModule({
      declarations:[
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipesComponent,
        RecipeEditComponent,
        StartrecipeComponent
      ],
      imports:[
          MaterialModule,
          RouterModule,
          ReactiveFormsModule,
          CommonModule,
          HttpClientModule,
      ],
      exports:[
        RouterModule
      ],
      providers:[]
 })
export class RecipeModule
{
   
       
}