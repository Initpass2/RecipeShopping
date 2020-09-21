import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {



  constructor() { }
  recipes : Recipe[]=[
    new Recipe("burger","edible","https://upload.wikimedia.org/wikipedia/commons/d/d6/A_bowl_of_rice.jpg"),
    new Recipe("chillichicken","liquid","https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Dal_Tadka_01_%2836779549481%29.jpg/220px-Dal_Tadka_01_%2836779549481%29.jpg")
  ]


recipeSelected=new EventEmitter<Recipe>();


  getRecipes()
  {
        return this.recipes;    
  }

}
