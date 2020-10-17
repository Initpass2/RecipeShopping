import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

constructor(private shoppingService: ShoppingListService) { }

  recipes : Recipe[]=[
    new Recipe("burger",
              "edible",
              "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
              [new Ingredient("Meat",1),
              new Ingredient("French Fries",1)  
              ]),
    new Recipe("chillichicken",
              "liquid",
              "https://upload.wikimedia.org/wikipedia/commons/f/fb/Chinese_Chilli_chicken.jpg",
              [new Ingredient("Meat",1),
              new Ingredient("Capcicum",1), 
              new Ingredient("Onion",1)  
              ]),
              
  ]
recipeSelected=new EventEmitter<Recipe>();

///REceipesected is a eventemitter ...recipeitem  emits its value recipeDetail listens to its value.


  getRecipes()
  {
     return this.recipes;    
  }

  getRecipeById(id:number): Recipe
  {
    return this.recipes[id] ;
  }

  addtoShoppingList(ingredients: Ingredient[])
  {
  this.shoppingService.addIngredientToshoppingList(ingredients);
  }

}
