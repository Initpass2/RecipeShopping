import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit {
  selectedRecipe$ : Observable<Recipe>; 
  //id : number;
  constructor(private service : RecipeService,
               private router : Router,
               private arRoute: ActivatedRoute) { }
  
 
  ngOnInit(): void
   {
     //console.log(JSON.stringify(this.arRoute.queryParams));
     console.log(this.arRoute.snapshot.queryParams);
  // console.log(this.arRoute.snapshot.params.id);
  

  this.arRoute.params.subscribe((params : Params)=>{
     // this.id = +params.id;
     this.selectedRecipe$= this.service.getRecipeById(params.id);
   }
  )
    // this.service.recipeSelected
    // .subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );

  }
  onEditRecipe()
  {
    this.router.navigate(['edit'],{relativeTo: this.arRoute});
  }
  onAddtoShoppingList(selectedRecipe : Recipe)
  {
    this.service.addtoShoppingList(selectedRecipe.ingredients);
    this.router.navigate(['/shopping-list']);
    // .pipe(take(1))          // pipe is used so that we dont need to use ng Unsubscribe
    // .subscribe((data)=>{ 
    //   this.router.navigate(['/shopping-list']);
    // });
    
  }

}
