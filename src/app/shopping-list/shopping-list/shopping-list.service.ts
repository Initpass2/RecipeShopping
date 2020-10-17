import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  ingredients : Ingredient[]=[
    new Ingredient("rice",45),
    new Ingredient("dal",10),
    new Ingredient("cabbage",20)  
  ]

  constructor() { }


  addIngredientToshoppingList(ingredients  : Ingredient[])
  {
      this.ingredients.push(...ingredients);
  }


  getShoppingList()
  {
    return this.ingredients;    
  }

  //return shopping list
  //get ingredients
  //update 
  //delete
  //insert into shopping list

}
