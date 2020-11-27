import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from 'src/app/Shared/Auth/authService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  ingredients : Ingredient[]=[
    new Ingredient("rice",45),
    new Ingredient("dal",10),
    new Ingredient("cabbage",20)  
  ]

  constructor(private http : HttpClient,private auth : AuthServiceService) { }

  private editIngredient =new Subject <number> ()

  addIngredientToshoppingList(ingredients  : Ingredient[]) 
  //: Observable<Ingredient[]>
  {
      this.ingredients.push(...ingredients);
    // return this.http.post<Ingredient[]>(environment.apiEndPoints.ShoppingUrl + '.json',{...ingredients})
      //{
       // user : this.auth.username,
        
   // }
      
  }

  getIngredient(i: number) 
  {
    return this.ingredients[i];
  }


  getShoppingList()
  {
    return this.ingredients;    
  }

  addSingleIngredient(ingredient : Ingredient)
  {
    this.ingredients.push(ingredient);
  }

  updateSingleIngredient(ingredient : Ingredient,i:number)
  {
    this.ingredients[i]=ingredient;
  }

  getEditIngredient() 
  {
    return this.editIngredient as Observable<number>;//it listems
  }

  setIngredient(i :number)
  {
    this.editIngredient.next(i);
  }

  discardIngredient(i : number)
  {
    this.ingredients.splice(i,1);
  }
 

  //return shopping list
  //get ingredients
  //update 
  //delete
  //insert into shopping list

}
