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


  getShoppingList()
  {
        return this.ingredients;    
  }

}
