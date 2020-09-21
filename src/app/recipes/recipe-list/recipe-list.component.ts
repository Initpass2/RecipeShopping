import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[];

 
  constructor(private service:  RecipeService ) { }

  ngOnInit(): void {
    this.recipes=this.service.getRecipes();
     
  }



}
