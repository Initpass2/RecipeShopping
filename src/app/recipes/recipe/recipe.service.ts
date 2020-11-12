import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list/shopping-list.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

constructor(private shoppingService: ShoppingListService, private http : HttpClient) { }

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

  getRecipesobsUsedInResolver()  : Observable<Recipe[]> 
  {
   //  return  of(this.recipes);   //of is used to make the recipe array an observable. 
   return this.http.get<Recipe[]>(environment.apiEndPoints.Recipeurl)
   .pipe(
     map((recipes: any)=>{
      let recipelist  : Recipe[]=[];
      for (const key in recipes) {
        if (Object.prototype.hasOwnProperty.call(recipes, key)) {
          const element = recipes[key];   
          
          recipelist.push({...element,_id: key});
        }
      }
     // console.log('from Service' +  JSON.stringify(recipes)); 
      return recipelist;
     }),
   );
   //return  of(this.recipes); 
  }


 //  return recipes.map(recipe=>
      //   {
      //    return {
      //      ...recipe,ingredients : recipe.ingredients? recipe.ingredients: []
      //    }
      //  })

  getRecipeById(id:number): Recipe
  {
    return this.recipes[id] ;
  }

  addtoShoppingList(ingredients: Ingredient[])
  {
  this.shoppingService.addIngredientToshoppingList(ingredients);
  }

  addRecipes(recipe: Recipe)
  {
  //this.recipes.push(recipe);
    this.http.post(environment.apiEndPoints.Recipeurl,recipe).subscribe((
      response:any)=>{
        console.log('Adding Recipe: ' + response);
      }
    );
  }

  editRecipe(id:number,recipe: Recipe)
  {
      this.recipes[id]=recipe;
  }

}
