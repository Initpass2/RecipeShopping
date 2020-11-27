import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list/shopping-list.service';
import { observable, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SnackBarService } from 'src/app/Shared/SnackBar/snack-bar.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

constructor(private shoppingService: ShoppingListService, private http : HttpClient, private snackBarService : SnackBarService) { }

 recipeReloadRequired =new Subject<boolean>();
  // recipes : Recipe[]=[
  //   new Recipe("burger",
  //             "edible",
  //             "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
  //             [new Ingredient("Meat",1),
  //             new Ingredient("French Fries",1)  
  //             ]),
  //   new Recipe("chillichicken",
  //             "liquid",
  //             "https://upload.wikimedia.org/wikipedia/commons/f/fb/Chinese_Chilli_chicken.jpg",
  //             [new Ingredient("Meat",1),
  //             new Ingredient("Capcicum",1), 
  //             new Ingredient("Onion",1)  
  //             ]),
              
  // ]
recipeSelected=new EventEmitter<Recipe>();

///REceipesected is a eventemitter ...recipeitem  emits its value recipeDetail listens to its value.


//  // getRecipes() 
//   //{

//      return this.recipes;    
//   }

  getRecipesobsUsedInResolver()  : Observable<Recipe[]> 
  {
   //  return  of(this.recipes);   //of is used to make the recipe array an observable. 
   return this.http.get<Recipe[]>(environment.apiEndPoints.Recipeurl + '.json')
   .pipe
   (
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
     catchError(e=>{
        console.log(e);
      //  throw e;  // from component level we will use catch
        return  of([]);  //of Operator  is used to convert into Observable comes of rxjs 
                        //to convert convert observable to object we do use subscriber   
                        ///only in subject and behaviour subject  we can only insert data not in observable
     })
   )
  
   //return  of(this.recipes); 
  }


 //  return recipes.map(recipe=>
      //   {
      //    return {
      //      ...recipe,ingredients : recipe.ingredients? recipe.ingredients: []
      //    }
      //  })

  getRecipeById(id:any): Observable<Recipe>
  {
   // return this.recipes[id] ;
  //  "https://recipeshopping-7d560.firebaseio.com/Recipes/-MLcjhkXjWqiawHBZzlj"
   return this.http.get<Recipe>(environment.apiEndPoints.Recipeurl + "/" +id + '.json').pipe(
     map(data=>data),
     catchError(e=>{
   this.snackBarService.openSnackBar("Something happened!!!");
      return of({} as Recipe);
     })
     
   );
  }

  addtoShoppingList(ingredients: Ingredient[]) 
  //: Observable<any>
  {
  return this.shoppingService.addIngredientToshoppingList(ingredients);
  }

  addRecipes(recipe: Recipe): Observable<Recipe>
  {
  //this.recipes.push(recipe);
    // this.http.post(environment.apiEndPoints.Recipeurl + '.json',recipe).subscribe((
    //   response:any)=>{
    //     console.log('Adding Recipe: ' + response);
    //   }
    // );

    return this.http.post<Recipe>(environment.apiEndPoints.Recipeurl + '.json',recipe).pipe(
      map(data=>{
        this.snackBarService.openSnackBar("Successfully Added!!");
        return data;
      }),
      catchError(e=>{
    return of({} as Recipe);
      })
      
    );
  }

  editRecipe(id:number,recipe: Recipe)  : Observable<any>
  {
     // this.recipes[id]=recipe;
    
   //  console.log(JSON.stringify(recipe));
   // return this.http.put(environment.apiEndPoints.Recipeurl + "/" +id + '.json',recipe);
   return this.http.put<Recipe>(environment.apiEndPoints.Recipeurl + "/" +id + '.json',recipe).pipe(
      map(data=>{
        this.snackBarService.openSnackBar("Edited Successfully");
        return  data;
      }),
      catchError(e=>{
    return of({} as Recipe);
      })
      
    );
  }

/* recipes.map(data=>data)---tis means the below 
-------------------------------------
   recipes.map((data)=>{
return data;
   })
    
    
    */

}
