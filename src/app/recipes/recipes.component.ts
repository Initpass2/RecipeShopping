import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  
  }

}
